import exprEval        from 'expr-eval';
import clone           from 'lodash/clone';
import merge           from 'lodash/merge';
import defaults         from 'lodash/defaultsDeep';
import map              from 'lodash/map';
import reduce           from 'lodash/reduce';
import has              from 'lodash/has';
import get              from 'lodash/get';
import set              from 'lodash/set';
import pull             from 'lodash/pull';
import defaultTo        from 'lodash/defaultTo';
import difference       from 'lodash/difference';
import intersection     from 'lodash/intersection';
import isPlainObject    from 'lodash/isPlainObject';
import toNumber         from 'lodash/toNumber';
import zipObject        from 'lodash/zipObject';
import sortBy           from 'lodash/sortBy';
import { util }         from '../mixins/util';
import sum              from '../functions/sum';
import sumBy            from 'lodash/sumBy';
import multiply         from '../functions/multiply';
import buildDictionary  from '../functions/buildDictionary';
import buildTree        from '../functions/buildTree';
import traverseTree     from '../functions/traverseTree';
import splitPath        from '../functions/splitPath';
import joinPath         from '../functions/joinPath';
import flatten          from 'flat';
import detailedDiff     from 'deep-object-diff/dist/detailed';

const UP = -1;
const BOTH = 0;
const DOWN = 1;

/**
 * Pragma form.
 *
 * Expands field lists a dictionary and tree. Processes field expressions from
 * state data.
 *
 * TODO: Rename to Form?
 *
 * @class FormProcessor
 */
export default class FormProcessor
{
	/**
	 * Create a new property processor.
	 *
	 * @constructor
	 * @param {Field[]}                     [fields=[]]       - Initial form fields.
	 * @param {Object.<string, Function>}   [functions={}]    - Functions to make available for field expressions.
	 * @param {Object.<string, Object>}     [inputOptions={}] - Default input options keyed by input type.
	 */
	constructor(fields = [], functions = {}, inputOptions = {})
	{
		/**
		 * Typecasting functions for each field type.
		 *
		 * TODO: Strong casting functions
		 *
		 * @type {Object.<string, Function>}
		 */
		this.casts = {
			'string':  (f, v) => v == null ? '' : '' + v,
			'number':  (f, v) => toNumber(util.clamp(v, get(f, 'options.min'), get(f, 'options.max'))),
			'boolean': (f, v) => !!v
		};

		/**
		 * Default property values for each field type.
		 *
		 * @type {Object}
		 */
		this.defaults = {};

		this.setDefaults({
			'*': {
				type: 'number',
				visible: true
			},
			'virtual': {
				visible: false,
				virtual: true,
				omit: true
			},
			'string': {
				input: 'string',
				default: ''
			},
			'number': {
				input: 'number',
				default: 0,
				options: {
					min: -100,
					max: 100,
					step: 1
				}
			},
			'boolean': {
				input: 'boolean',
				default: false
			},
			'selection': {
				input: 'selection',
				options: {
					options: {}
				}
			},
			'section': {
				input: 'section'
			},
			'group': {
				input: 'group'
			},
			'list': {
				input: 'list'
			},
			'list-item': {
				input: 'list-item'
			},
			'table': {
				input: 'pragma-table'
			}
		});

		/**
		 * Default input options for each input type.
		 *
		 * @type {Object.<string, Object>}
		 */
		this.inputOptions = merge({}, inputOptions);

		/**
		 * Expression functions.
		 *
		 * @type {Object.<string, Function>}
		 */
		this.functions = {};

		/**
		 * Expression parser.
		 *
		 * @type {Parser}
		 */
		this.parser = new exprEval.Parser({
			operators: {
				in: true
			}
		});

		// Set the functions
		this.addFunctions(merge({
			concat: (...args) => args.join(''),
			keys:  Object.keys,
			multiply,
			sum,
			sumBy,
			map,
			reduce
		}, functions));

		/**
		 * The set of form fields.
		 *
		 * @type {Field[]}
		 */
		this.fields = [];

		/**
		 * Fields keyed by path.
		 *
		 * @type {FieldDictionary}
		 */
		this.dictionary = {};

		/**
		 * The root node of the field tree.
		 *
		 * @type {Field}
		 */
		this.tree = {};

		// Set the form fields
		this.setFields(fields);

		/**
		 * Value cache for each field.
		 *
		 * @type {Object.<string, *>}
		 */
		this.valueCache = {};

		/**
		 * Field expression cache keyed by path.
		 *
		 * @type {Object.<string, Expression>}
		 */
		this.expressionCache = {};

		/**
		 * Field update dependencies keyed by path.
		 *
		 * @type {Object.<string, string[]>}
		 */
		this.expressionDependencies = {};

		/**
		 * Map of updated fields.
		 *
		 * Used to prevent updating fields more than once.
		 *
		 * @type {Object.<string, boolean>}
		 */
		this.updatedFields = {};
	}

	/**
	 * Check whether a field exists at the given path.
	 *
	 * @protected
	 * @param {string} path - The path of the field to check.
	 * @return {boolean}
	 */
	hasField(path)
	{
		return has(this.dictionary, path);
	}

	/**
	 * Get the field at the given path.
	 *
	 * @protected
	 * @param {string} path - The path of the field to get.
	 * @return {Field}
	 */
	getField(path)
	{
		return this.dictionary[path];
	}

	/**
	 * Get the parent field of the field at the given path.
	 *
	 * @protected
	 * @param {Field} field
	 * @return {Field|null}
	 */
	getFieldParent(field)
	{
		if (!field) {
			return null;
		}

		return this.getField(field.parent);
	}

	/**
	 * Get the ancestors of a field.
	 *
	 * @protected
	 * @param {Field} field
	 * @return {Field[]}
	 */
	getFieldAncestors(field)
	{
		let ancestors = [];

		while (field.hasOwnProperty('parent') && this.hasField(field.parent)) {
			field = this.getFieldParent(field);

			ancestors.push(field);
		}

		return ancestors;
	}

	/**
	 * Get the descendants of a field.
	 *
	 * @protected
	 * @param {Field} field
	 * @return {Field[]}
	 */
	getFieldDescendants(field)
	{
		let descendants = [];

		traverseTree(field, (descendant) => {
			descendants.push(descendant);
		});

		return descendants;
	}

	/**
	 * Get the current value of a field.
	 *
	 * @protected
	 * @param {Field} field     - The field to get the value of.
	 * @param {*}     [data={}] - Optional data to read current values from.
	 * @param {*}     [value]   - Optional current value.
	 * @return {*} The current value of the field.
	 */
	getFieldValue(field, data = {}, value = null)
	{
		if (!field) {
			return value;
		}

		value = defaultTo(value, get(data, field.path));

		// Merge default values if specified
		if (field.merge) {
			if (isPlainObject(field.default)) {
				return merge({}, field.default, field.value, value);
			}

			// TODO: Handle arrays
		}

		// Otherwise use the first defined value
		return defaultTo(value, defaultTo(field.value, field.default));
	}

	/**
	 * Get the default value of a field.
	 *
	 * @protected
	 * @param {Field} field - The field to get the default value of.
	 * @return {*} The default value of the field.
	 */
	getFieldDefaultValue(field)
	{
		if (!field) {
			return null;
		}

		return field.default;
	}

	/**
	 * Get the template field that a field should a extend.
	 *
	 * @param {Field} field - The field to get the template for.
	 * @return {Field|null} The template field.
	 */
	getFieldTemplate(field)
	{
		if (!field) {
			return null;
		}

		return this.getField(field.extends);
	}

	/**
	 * Get the keys of the field's children.
	 *
	 * @protected
	 * @param {Field} field - The field to get the child keys of.
	 * @return {array} The keys of the field's children.
	 */
	getFieldChildrenKeys(field)
	{
		let i,
			keys = [],
			children = field.children || [];

		for (i = 0; i < children.length; i++) {
			keys.push(children[i].pathFragment);
		}

		return keys;
	}

	/**
	 * Get the template that a field's children should extend.
	 *
	 * @protected
	 * @param {Field} field - The field to get the child template for.
	 * @return {Field|null} The template field.
	 */
	getFieldChildrenTemplate(field)
	{
		if (!field) {
			return null;
		}

		return this.getField(field.template);
	}

	/**
	 * Get the fields dependent upon the given field's expression.
	 *
	 * @protected
	 * @param {Field} field - The field whose expression to get dependent fields of.
	 * @return {Field[]} The dependent fields of the given field's expression
	 */
	getFieldExpressionDependencies(field)
	{
		let dependencies = this.expressionDependencies[field.path];

		// Skip if the field has no dependencies
		if (!dependencies || !dependencies.length) {
			return [];
		}

		let fields = [];

		for (let i = 0; i < dependencies.length; i++) {
			let dependency = this.getField(dependencies[i]);

			if (!dependency) {
				continue;
			}

			fields.push(dependency);
		}

		return fields;
	}

	/**
	 * Get the current value of a field.
	 *
	 * Falls back to default values as appropriate.
	 *
	 * @public
	 * @param {string} path - The path to the field.
	 * @return {*} The value of the field
	 */
	getValue(path)
	{
		return this.getFieldValue(this.getField(path));
	}

	/**
	 * Cast a value based on the property it belongs to.
	 *
	 * @public
	 * @param {Field} field
	 * @param {*} value
	 */
	castValue(field, value)
	{
		if (!field)
			return value;

		if (!this.casts[field.type])
			return value;

		// if (Array.isArray(value))
		// 	return value.map(this.casts[field.type]);

		value = this.casts[field.type](field, value);

		return value;
	}

	/**
	 * Derive a field's value from some data.
	 *
	 * @protected
	 * @param {string} path - The path of the field to derive a value for.
	 * @param {Object} data - The data to derive values from.
	 * @return {*} The derived value.
	 */
	deriveValue(path, data)
	{
		// Return from the value cache if a value is set
		if (this.valueCache.hasOwnProperty(path)) {
			return this.valueCache[path];
		}

		let field = this.getField(path);
		let value = this.getFieldValue(field, data);

		// Return the raw value if there's no such field
		if (!field) {
			return value;
		}

		// Cast the value
		value = this.castValue(field, value);

		// Evaluate the field's expression
		value = this.evaluateFieldExpression(field, data, value);

		// Fall back to defaults
		//value = defaultTo(value, defaultTo(field.default, null));
		value = this.getFieldValue(field, data, value);

		// Update the value cache
		this.valueCache[path] = value;

		return value;
	}

	/**
	 * Build a field's expression.
	 *
	 * @param {Field} field - The field to build an expression for.
	 * @return {Expression} The built expression.
	 */
	buildFieldExpression(field)
	{
		if (field.expression == null || typeof field.expression !== 'string') {
			return null;
		}

		// Use the cached expression if one is available
		if (this.expressionCache[field.path]) {
			return this.expressionCache[field.path];
		}

		// Build the initial expression
		let expression;

		try {
			expression = this.parser.parse(field.expression);
		} catch (error) {
			console.error(`Error parsing expression for field '${field.path}': ${error.message}`, {
				expressionString: field.expression,
				expressionObject: expression
			});

			return null;
		}

		// Substitute contextual variables
		let substitutions = {
			$parent: field.parent
		};

		for (let s in substitutions) {
			try {
				// Skip null, NaN, undefined and empty strings
				if (substitutions[s] == null || substitutions[s] === '') {
					continue;
				}

				expression = expression.substitute(s, substitutions[s]);
			} catch (error) {
				console.error(`Error substituting expression variable '${s}' for field '${field.path}': "${error.message}"`, {
					expressionString: field.expression,
					expressionObject: expression,
					substitutionName: s,
					substitutionValue: substitutions[s]
				});

				return null;
			}
		}

		this.expressionCache[field.path] = expression;

		return expression;
	}

	/**
	 * Evaluate a field's value from its expression.
	 *
	 * Causes the evaluation of any field dependencies as a result.
	 *
	 * TODO: Evaluate (and cache) expressions for other field properties! :D
	 *
	 * @param {Field}  field   - The field to compute the value of.
	 * @param {Object} data    - The data to derive values from.
	 * @param {*}      [value] - The current value of the field.
	 * @return {*} The computed value of the field's expression.
	 */
	evaluateFieldExpression(field, data, value)
	{
		value = this.getFieldValue(field, data, value);

		// Parse the expression
		let expression = this.buildFieldExpression(field);

		if (!expression) {
			return value;
		}

		// TODO: Extract deriving variables and building contextual functions
		//       let variables = buildExpressionContext(field, data, expression, value)?
		//       Contextual functions should still update the same "variables" reference

		// Derive values for the variables in the expression
		let variables = expression.variables({ withMembers: true });

		let values = {
			$this: field,
			$value: value
		};

		for (let v = 0; v < variables.length; v++) {
			let variable = variables[v];

			if (has(values, variable))
				continue;

			set(values, variable, this.deriveValue(variable, data));
		}

		// Build contextual functions
		values = merge(
			values,
			{
				field: (path) => {
					variables.push(path);

					return this.getField(path);
				},
				value: (path) => {
					// Add the path to the list of expression variables
					variables.push(path);

					// Derive the value for the expression
					return this.deriveValue(path, data);
				}
			}
		);

		// Evaluate the expression
		try {
			value = expression.evaluate(values);
		} catch (error) {
			console.log('evaluateFieldExpression', field, data, value);

			console.error(`Error evaluating expression for field '${field.path}': ${error.message}`);
		}

		//console.log('evaluateFieldExpression', field.path, expression.toString(), variables, values, value);
		//console.log('evaluateFieldExpression expression', expression);

		// Update the map of field update dependencies
		// TODO: Exclude contextual variables
		// TODO: Move this to an earlier processing step that evaluates the
		//       expression with spy functions
		for (let v = 0; v < variables.length; v++) {
			let variable = variables[v];

			this.expressionDependencies[variable] = this.expressionDependencies[variable] || [];

			if (this.expressionDependencies[variable].indexOf(field.path) < 0) {
				this.expressionDependencies[variable].push(field.path);
			}
		}

		return value;
	}

	/**
	 * Prepare fields from a set of field descriptions.
	 *
	 * Ascertain's the parent path and path fragment (key) of each field.
	 *
	 * TODO: Field class, FieldDescription typedef.
	 *
	 * @protected
	 * @param {Field[]} fields - The field description.
	 * @returns {Field[]} The given fields prepared with pathFragment and parent properties.
	 */
	prepareFields(fields)
	{
		if (!fields || !fields.length) {
			return fields;
		}

		let i, field, pathFragment, parentPath;

		for (i = 0; i < fields.length; i++) {
			field = fields[i];

			if (!field.path)
				continue;

			// Ascertain a parent path and path fragment
			[parentPath, pathFragment] = splitPath(field.path);

			field.pathFragment = defaultTo(field.pathFragment, pathFragment);
			field.parent = defaultTo(field.parent, parentPath);
		}

		return fields;
	}

	/**
	 * Set the form's fields.
	 *
	 * TODO: Creates, updates and removes fields accordingly.
	 *
	 * @public
	 * @param {Field[]} fields
	 */
	setFields(fields)
	{
		// Prepare the fields
		this.fields = this.prepareFields(fields);

		// TODO: Build dictionary from given fields, compare with current fields,
		//       update things accordingly
		//this.dictionary = this.buildDictionary(this.fields);
		this.dictionary = this.updateDictionary(this.fields);

		// Compose the fields into a tree
		this.tree = this.buildTree(this.dictionary);

		// Clear all caches
		this.valueCache = {};
		//this.expressionCache = {};
		this.expressionDependencies = {};
	}

	/**
	 * Add a form field.
	 *
	 * @param {Field} field
	 */
	addField(field) {
		let parent = this.getFieldParent(field);

		if (!parent) {
			console.warn(`Could not set field ${field.path} - its parent does not exist`);
			return;
		}

		if (!parent.children) {
			parent.children = [];
		}

		if (!parent.children.includes(field)) {
			parent.children.push(field);
		}

		this.dictionary[field.path] = field;
	}

	/**
	 * Update a property with the given value.
	 *
	 * @public
	 * @param {Object} data  - The data to update.
	 * @param {string} path  - The path of the field to update.
	 * @param {*}      value - The value to set.
	 * @return {*} The updated value
	 */
	setValue(data, path, value)
	{
		let field = this.getField(path);

		// Update the value if one is given
		if (value !== undefined) {
			if (field) {
				field.value = value;
			}

			set(data, path, value);
		}

		// Update the field at this path
		this.updatePath(path, data);

		// Get the updated value
		return get(data, path);
	}

	/**
	 * Clear the value cache.
	 *
	 * Optionally accepts a path to clear.
	 *
	 * @param {string} path
	 */
	clearValueCache(path = '')
	{
		// Just empty the entire cache if there's no path is or there's no field
		// at the given path
		if (!path || !this.getField(path)) {
			this.valueCache = {};

			return;
		}

		let i, field = this.getField(path);

		// Clear cached values of child fields iteratively
		let child,
			children = field.children,
			nextChildren = [];

		while (children && children.length) {
			nextChildren = [];

			for (i = 0; i < children.length; i++) {
				child = children[i];

				delete this.valueCache[child.path];

				if (child.children) {
					nextChildren = nextChildren.concat(child.children);
				}
			}

			children = nextChildren;
		}

		// Clear the cached value for this field
		delete this.valueCache[field.path];

		// Clear cached values of parent fields iteratively
		let ancestors = this.getFieldAncestors(field);

		for (i = 0; i < ancestors.length; i++) {
			delete this.valueCache[ancestors[i].path];
		}
	}

	/**
	 * Derive a field's name from its path.
	 *
	 * @protected
	 * @param {Field} field
	 * @return {string} The derived name
	 */
	deriveFieldName(field)
	{
		let path = field.path;
		let lastDotIndex = path.lastIndexOf('.');

		return util.sentenceCase(path.substring(lastDotIndex + 1));
	}

	/**
	 * Set the default field properties for each field type.
	 *
	 * @param {Object.<string, Object>} fieldProperties - The default field properties, keyed by field type.
	 */
	setDefaults(fieldProperties)
	{
		this.defaults = merge(
			this.defaults,
			fieldProperties
		);
	}

	/**
	 * Apply the form's default properties to the given fields.
	 *
	 * Fills in default values, derives default names.
	 *
	 * @protected
	 * @param {Field[]} fields - The fields to apply default values to.
	 * @returns {Field[]}
	 */
	applyDefaults(fields)
	{
		if (!fields || !fields.length) {
			return fields;
		}

		let i, field;

		for (i = 0; i < fields.length; i++) {
			field = fields[i];

			// Derive a name
			if (field.name === undefined) {
				field.name = this.deriveFieldName(field);
			}

			// Apply global defaults
			field = defaults(field, this.defaults['*']);

			// Apply type-specific defaults
			if (this.defaults[field.type]) {
				field = defaults(field, this.defaults[field.type]);
			}

			// Apply default input options
			if (this.inputOptions[field.input]) {
				field.options = field.options || {};

				field.options = defaults(field.options, this.inputOptions[field.input]);
			}

			// Disable the field implicitly if it has an expression
			if (!field.hasOwnProperty('disabled')) {
				field.disabled = !!field.expression;
			}
		}

		return fields;
	}

	/**
	 * Add to the form's functions.
	 *
	 * @param {Object.<string, Function>} functions - Functions to add, keyed by name.
	 */
	addFunctions(functions)
	{
		// Add the functions to the form
		this.functions = merge(this.functions, functions);

		// Add the functions to the expression parser
		this.parser.functions = merge(this.parser.functions, this.functions);

		// Clear the expression cache
		//this.expressionCache = {};
	}

	/**
	 * Diff the given data with the current form data.
	 *
	 * @protected
	 * @param {Object} data - The data to diff with the current form data.
	 * @return {Object} The detailed diff of current form data and given data.
	 */
	diffFormData(data)
	{
		//console.time('buildData(this.tree)');
		let formData = this.buildData(this.tree);
		//console.timeEnd('buildData(this.tree)');

		//console.log(formData);

		//console.time('detailedDiff');
		let diff = detailedDiff(formData, data);
		//console.timeEnd('detailedDiff');

		//console.log(diff);

		return diff;
	}

	/**
	 * Update the form using the given data.
	 *
	 * @public
	 * @param {Object} [data] - The data to update with.
	 */
	update(data)
	{
		this.updatePath('', data);
	}

	/**
	 * Update the field at the given path.
	 *
	 * @param {string} path         - The path of the field to update.
	 * @param {Object} data         - The data to update with.
	 * @param {Object} [visited={}] - Map of fields already visited.
	 */
	updatePath(path, data, visited = {})
	{
		let field = this.getField(path);

		if (!field || visited[field.path]) {
			return;
		}

		this.clearValueCache(path);

		// Update the field and its children
		//console.time('updatePath() ' + path);
		traverseTree(
			field,
			(field) => {
				return this.preUpdateField(field, data);
			},
			(field) => {
				// Skip fields that have already been visited
				if (visited[field.path]) {
					//console.warn('skipped visited field', field.path);
					return;
				}

				this.updateField(field, data, visited);

				visited[field.path] = true;
			}
		);

		// Update parent fields and their dependencies
		let i;
		let ancestors = this.getFieldAncestors(field);

		for (i = 0; i < ancestors.length; i++) {
			if (visited[ancestors[i].path]) {
				//console.log('skipped visited ancestor', field.path, ancestors[i].path, visited);
				continue;
			}

			this.updateField(ancestors[i], data, visited);

			visited[ancestors[i].path] = true;
		}
		//console.timeEnd('updatePath() ' + path);
	}

	/**
	 * Update the given fields with the given data.
	 *
	 * Recursively descends into child fields and updates dependent fields,
	 * including parents.
	 *
	 * @protected
	 * @param {Field[]} fields - The fields to update.
	 * @param {Object}  data   - The data to update with.
	 */
	updateFields(fields, data)
	{
		if (!Array.isArray(fields) || !fields.length) {
			return;
		}

		for (let i = 0; i < fields.length; i++) {
			this.updatePath(fields[i].path, data);
		}
	}

	/**
	 * Pre-order update the given field with the given data.
	 *
	 * @protected
	 * @param {Field}  field - The field to update.
	 * @param {Object} data  - The data to update with.
	 * @returns {boolean}
	 */
	preUpdateField(field, data)
	{
		this.updateFieldInheritance(field, data);

		return !field.omit;
	}

	/**
	 * Update the given field with the given data.
	 *
	 * Recursively descends into child fields and updates dependent fields,
	 * including parents.
	 *
	 * @protected
	 * @param {Field}   field        - The field to update.
	 * @param {Object}  data         - The data to update with.
	 * @param {Object}  [visited={}] - Map of fields already visited.
	 */
	updateField(field, data, visited = {})
	{
		//console.log('updateField()', field.path);

		// Apply default values
		this.applyDefaults([field]);

		// Update the state's value
		this.updateDataValue(field, data);

		// Update the field's value
		this.updateFieldValue(field, data);

		// Update the fields that are dependent upon the value of this field
		this.updateFieldDependencies(field, data, visited);
	}

	/**
	 * Update data from the given field.
	 *
	 * @protected
	 * @param {Field}  field - The field to update with.
	 * @param {Object} data  - The data to update.
	 * @return {Object} The updated data.
	 */
	updateDataValue(field, data)
	{
		if (!field || field.omit || field.virtual) {
			return data;
		}

		set(data, field.path, this.deriveValue(field.path, data));

		return data;
	}

	/**
	 * Update a field using the given data.
	 *
	 * @protected
	 * @param {Field}  field - The field to update.
	 * @param {Object} data  - The data to update with.
	 */
	updateFieldValue(field, data)
	{
		if (!field) {
			return;
		}

		//console.log('updateFieldValue()', field.path);

		// Update the field value
		field.value = get(data, field.path);
	}

	/**
	 * Update fields that are dependent upon the value of the given field.
	 *
	 * @protected
	 * @param {Field}  field        - The field to update dependencies of.
	 * @param {Object} data         - The data to update from.
	 * @param {Object} [visited={}] - Map of fields already visited.
	 */
	updateFieldDependencies(field, data, visited = {})
	{
		// Update the field's expression dependencies
		let dependencies = this.getFieldExpressionDependencies(field);

		for (let i = 0; i < dependencies.length; i++) {
			this.updatePath(dependencies[i].path, data, visited);
		}
	}

	/**
	 * Update the ancestors of the given field.
	 *
	 * @protected
	 * @param {Field}  field - The field to update parents of.
	 * @param {Object} data  - The data to update with.
	 */
	updateFieldAncestorValues(field, data)
	{
		let i, parents = this.getFieldAncestors(field);

		for (i = 0; i < parents.length; i++) {
			this.updateFieldValue(parents[i], data);
		}
	}

	/**
	 * Update a field's inheritance.
	 *
	 * Ensures that inherited child fields exist.
	 *
	 * @param {Field}  field - The field to update the inheritance of.
	 * @param {Object} data  - The date to update with.
	 */
	updateFieldInheritance(field, data)
	{
		// Update child template fields
		this.updateTemplateFields(field, data);

		// Inherit the field's template
		this.inheritTemplate(field, data);
	}

	/**
	 * Get the keys of child fields that don't exist in the given data.
	 *
	 * Retrieves the new keys, existing keys and old keys of a field compared
	 * to its data.
	 *
	 * @protected
	 * @param {Field} field - The field with a template.
	 * @param {Object} data - The data to diff against.
	 * @return array [newPaths[], existingPaths[], oldPaths[]]
	 */
	diffFieldDataKeys(field, data)
	{
		// Grab the data keys and child field keys
		let childData      = this.getFieldValue(field, data);
		let childDataKeys  = childData ? Object.keys(childData) : [];
		let childFieldKeys = this.getFieldChildrenKeys(field);

		// Keys in data that aren't in fields
		let newKeys = difference(childDataKeys, childFieldKeys);

		// Keys in data and fields
		let existingKeys = intersection(childDataKeys, childFieldKeys);

		// Keys in fields that aren't in data
		let oldKeys = difference(childFieldKeys, childDataKeys);

		// console.log('diffTemplateFieldKeys()', field.path, 'newKeys', newKeys);
		// console.log('diffTemplateFieldKeys()', field.path, 'existingKeys', existingKeys);
		// console.log('diffTemplateFieldKeys()', field.path, 'oldKeys', oldKeys);

		return [newKeys, existingKeys, oldKeys];
	}

	/**
	 * Unravel all templates into fields for the given field and data.
	 *
	 * TODO: Try to merge this into inheritTemplate(), or extract a method
	 *       that can handle both cases, like updateFieldChildrenInheritance().
	 *
	 * @protected
	 * @param {Field}  field  - The field to update template fields for.
	 * @param {Object} [data] - The data used to unravel field templates.
	 */
	updateTemplateFields(field, data)
	{
		if (!field) {
			return;
		}

		let template = this.getFieldChildrenTemplate(field);

		if (!template) {
			return;
		}

		let i,
			key,
			path,
			value,
			defaultValue,
			existingField,
			newField,
			newFields = [];

		// Find child fields that need to be added, updated or removed
		let [newKeys, existingKeys, oldKeys] = this.diffFieldDataKeys(field, data);

		let existingFieldKeys = this.getFieldChildrenKeys(field);

		let fixedKeys = field.fixed || [];

		// TODO: Extract to... diffFixedFieldDataKeys()...?
		// Remove fixed keys from the keys that need removing
		oldKeys = difference(oldKeys, fixedKeys);

		// Add the existent fixed keys to the keys that need updating
		existingKeys = existingKeys.concat(
			difference(
				intersection(fixedKeys, existingFieldKeys),
				existingKeys,
				newKeys
			)
		);

		// Add the non-existent fixed keys to the keys that need creating
		newKeys = newKeys.concat(difference(fixedKeys, existingFieldKeys, newKeys));

		//console.log(field.path, newKeys, existingKeys, oldKeys, fixedKeys, existingFieldKeys);

		// Remove old fields
		for (i = 0; i < oldKeys.length; i++) {
			key  = oldKeys[i];
			path = joinPath(field.path, key);

			//console.log('updateTemplateFields() oldField', field.path, path);

			this.removeField(this.getField(path));
		}

		// Update existing fields
		for (i = 0; i < existingKeys.length; i++) {
			key  = existingKeys[i];
			path = joinPath(field.path, key);

			//console.log('updateTemplateFields() existingField', field.path, path);

			// Ensure the existing field has the correct template
			existingField          = this.getField(path);
			existingField.extends  = template.path;
		}

		// Build new fields
		value        = this.getFieldValue(field, data);
		defaultValue = this.getFieldDefaultValue(field);

		for (i = 0; i < newKeys.length; i++) {
			key  = newKeys[i];
			path = joinPath(field.path, key);

			//console.log('updateTemplateFields() newField', path, value[key]);

			newField = {
				path:         path,
				pathFragment: key,
				parent:       field.path,
				extends:      template.path
			};

			if (value != null && value.hasOwnProperty(key)) {
				newField.value = value[key];
			}

			if (defaultValue != null && defaultValue.hasOwnProperty(key)) {
				newField.default = defaultValue[key];
			}

			newFields.push(newField);
		}

		// Add the new fields to the parent field and dictionary
		if (newFields.length) {
			field.children = field.children || [];
			field.children = field.children.concat(newFields);
		}

		this.updateDictionary(newFields);
	}

	/**
	 * Diff the keys of the first field's children with those of the second
	 * field's children.
	 *
	 * Finds keys of the first that aren't of the second, keys that are of both,
	 * and keys of the second that aren't of the first.
	 *
	 * @protected
	 * @param {Field} firstField
	 * @param {Field} secondField
	 * @returns {array} [newKeys, existingKeys, oldKeys]
	 */
	diffFieldChildrenKeys(firstField, secondField)
	{
		let firstFieldKeys  = this.getFieldChildrenKeys(firstField);
		let secondFieldKeys = this.getFieldChildrenKeys(secondField);

		// Child keys of the first field that aren't of the second field
		let newKeys = difference(firstFieldKeys, secondFieldKeys);

		// Keys in the children of both fields
		let existingKeys = intersection(firstFieldKeys, secondFieldKeys);

		// Child keys of the second field that aren't of the first
		let oldKeys = difference(secondFieldKeys, firstFieldKeys);

		return [newKeys, existingKeys, oldKeys];
	}

	/**
	 * Apply a field's inheritance.
	 *
	 * Ensures that a field inherits from its base field.
	 *
	 * @param {Field}  field - The inheriting field.
	 * @param {Object} data  - The data to update with.
	 * @return {Field}
	 */
	inheritTemplate(field, data)
	{
		if (!field) {
			return field;
		}

		let template = this.getFieldTemplate(field);

		// Skip fields without a template
		if (!template) {
			return field;
		}

		// Inherit the template
		if (field.extended !== template.path) {
			let templateClone = clone(template);

			// We don't want to inherit children, nor do we support more than a
			// single layer of inheritance
			delete templateClone.children;
			delete templateClone.template;

			// if (field.path === 'skills.list.test.ability') {
			// 	console.log('skills.list.test.ability', clone(field), templateClone);
			// }

			// Merge sandwich to retain original values
			field = merge(field, templateClone, clone(field));

			if (field.name == null) {
				field.name = this.deriveFieldName(field);
			}

			field.extended = template.path;

			this.prepareFields([field]);
		}

		//console.log('inheritTemplate()', field.path, template.path);

		// Update child field inheritance
		let i,
			key,
			path,
			value,
			defaultValue,
			existingField,
			newField,
			newFields = [];

		// Diff field child keys and template child keys
		let [newKeys, existingKeys] = this.diffFieldChildrenKeys(template, field);

		// Update existing template fields
		for (let i = 0; i < existingKeys.length; i++) {
			key  = existingKeys[i];
			path = joinPath(field.path, key);

			existingField         = this.getField(path);
			//console.log('inheritTemplate() existingField', path, existingField);
			existingField.extends = joinPath(template.path, key);
		}

		// Build new template fields
		value        = this.getFieldValue(field, data);
		defaultValue = this.getFieldDefaultValue(field);

		//console.log('inheritTemplate()', field.path, value);

		for (let i = 0; i < newKeys.length; i++) {
			key  = newKeys[i];
			path = joinPath(field.path, key);

			//console.log('inherit newKey', path, value[key]);

			// Build the new field
			newField = {
				path:         path,
				pathFragment: key,
				parent:       field.path,
				extends:      joinPath(template.path, key)
			};

			// Propagate values
			if (value != null && value.hasOwnProperty(key)) {
				newField.value = value[key];
			}

			if (defaultValue != null && defaultValue.hasOwnProperty(key)) {
				newField.default = defaultValue[key];
			}

			newFields.push(newField);
		}

		// Add the new fields to the parent field and dictionary
		// TODO: Extract addFieldChildren(field, children)
		if (newFields.length) {
			field.children = field.children || [];
			field.children = field.children.concat(newFields);

			// We then want to sort these in the order of template's children
			// TODO: Extract sortFieldChildren(field)
			let templateChildKeys = this.getFieldChildrenKeys(template);

			// We flip the child keys into an object where the values are the
			// indices of the child keys array
			templateChildKeys = zipObject(
				templateChildKeys,
				[...templateChildKeys.keys()]
			);

			// This makes it easier to sort
			field.children = sortBy(field.children, (child) => {
				return templateChildKeys[child.pathFragment];
			});
		}

		this.updateDictionary(newFields);

		return field;
	}

	/**
	 * Remove data from the given path.
	 *
	 * @public
	 * @param {Object} data - The data to change.
	 * @param {string} path - The path to remove.
	 */
	removeValue(data, path)
	{
		this.removePath(path, data);
	}

	/**
	 * Remove data at the given path and update parent fields.
	 *
	 * TODO: The naming and existence of this method doesn't quite make sense.
	 *       You'd expect it to remove the field(s) too, considering updatePath().
	 *       Refactor?
	 *
	 * @protected
	 * @param {string}  path - The path to remove.
	 * @param {Object}  data - The data to remove the path from.
	 */
	removePath(path, data)
	{
		let field = this.getField(path);

		if (!field) {
			return;
		}

		// Remove the state data
		this.removeData(field, data);

		// Update the parent field
		this.updatePath(this.getFieldParent(field).path, data);
	}

	/**
	 * Remove the given fields.
	 *
	 * @protected
	 * @param {Field[]} fields - The fields to remove.
	 * @return {Field[]} The removed fields.
	 */
	removeFields(fields)
	{
		if (!Array.isArray(fields) || !fields.length) {
			return [];
		}

		let removed = [];

		for (let i = 0; i < fields.length; i++) {
			removed.push(this.removeField(fields[i]));
		}

		return removed;
	}

	/**
	 * Remove a field.
	 *
	 * Clears dictionary and parent references to the field.
	 *
	 * Doesn't remove data or update parent field values.
	 *
	 * @protected
	 * @param {Field} field - The field to remove.
	 * @return {Field} The removed field.
	 */
	removeField(field)
	{
		if (!field) {
			return field;
		}

		// Remove the field and its children from the value cache, dictionary
		// and dependency list
		this.clearValueCache(field.path);

		traverseTree(field, (field) => {
			delete this.dictionary[field.path];
			delete this.expressionDependencies[field.path];
		});

		// Remove the field from its parent
		let parent = this.getFieldParent(field);
		pull(parent.children, field);

		return field;
	}

	/**
	 * Remove a field's path from the given data.
	 *
	 * @protected
	 * @param {Field} field - The field whose path to remove from data.
	 * @param {Object} data - The data to remove from.
	 */
	removeData(field, data)
	{
		if (!field) {
			return;
		}

		let parent = this.getField(field.parent);

		if (!parent) {
			return;
		}

		let parentPath = parent.path;
		let parentValue = this.getFieldValue(parent, data);
		let key = field.pathFragment;

		if (Array.isArray(parentValue)) {
			parentValue.splice(key, 1);
		} else {
			delete parentValue[key];
		}

		set(data, parentPath, parentValue);
	}

	/**
	 * Update the dictionary with the given fields.
	 *
	 * @param {Field[]} fields
	 * @returns {FieldDictionary}
	 */
	updateDictionary(fields)
	{
		if (!Array.isArray(fields)) {
			return this.dictionary;
		}

		for (let i = 0; i < fields.length; i++) {
			if (!fields[i] || !fields[i].path) {
				continue;
			}

			this.dictionary[fields[i].path] = fields[i];
		}

		return this.dictionary;
	}

	/**
	 * Build a dictionary from the given fields.
	 *
	 * @param {Field[]} fields
	 * @return {FieldDictionary}
	 */
	buildDictionary(fields)
	{
		return buildDictionary(fields);
	}

	/**
	 * Build a tree from the given dictionary.
	 *
	 * @protected
	 * @param {FieldDictionary} dictionary
	 * @returns {Field}
	 */
	buildTree(dictionary)
	{
		return buildTree(dictionary);
	}

	/**
	 * Build data from the current field state.
	 *
	 * @param {Field}  field     - The root field to traverse from.
	 * @param {Object} [data={}] - The target data object.
	 * @return {Object} The built data.
	 */
	buildData(field, data = {})
	{
		if (!field) {
			return data;
		}

		let child, childData;

		// If the field has children, build the data of its children
		if (field.children) {
			for (let c = 0; c < field.children.length; c++) {
				child = field.children[c];

				if (child.omit) {
					continue;
				}

				childData = this.buildData(field.children[c], data);
			}

			return data;
		}

		// Set data
		set(data, field.path, defaultTo(field.value, field.default));

		return data;
	}

	/**
	 * Build data for a field's template.
	 *
	 * @protected
	 * @param {Field}  field  - The field to build child data for.
	 * @param {Object} [data] - The target data object.
	 * @return {Object} The built data.
	 */
	buildTemplateData(field, data)
	{
		let template = this.getFieldChildrenTemplate(field);

		if (!template) {
			return null;
		}

		return get(this.buildData(template), template.path);
	}

	/**
	 * Add new a new data item for the field at the given path.
	 *
	 * @public
	 * @param {Object}        data    - The data to change.
	 * @param {string}        path    - The path of the field to add new data item to.
	 * @param {string|number} [key]   - Optional key to use for the new data item.
	 * @param {*}             [value] - Optional value to use for the new data item.
	 */
	addItem(data, path, key, value)
	{
		let field = this.getField(path);

		if (!field) {
			return;
		}

		// Build the new child data
		let newData = merge(this.buildTemplateData(field), value || {});

		// Get the target for the data
		let target = get(data, path, []);

		// Add the new child data to the collection
		if (Array.isArray(target)) {
			target.push(newData);
		} else if (key != null && typeof target === 'object') {
			target[key] = newData;
		} else {
			// Bail if we're not dealing with a collection
			console.warn(
				`Could not create new child data for '${path}';` +
				` either it wasn't an array or wasn't an object with a key provided`
			);

			return;
		}

		// Set it back
		set(data, path, target);

		// Update the form
		this.updatePath(path, data);
	}
}

/**
 * A dictionary of fields.
 *
 * Fields are keyed by their path.
 *
 * @typedef {Object.<string, Field>} FieldDictionary
 */

/**
 * A field description.
 *
 * TODO: Update this to reflect the simplest approach to describing fields.
 *       Could also be called FieldOptions if passed to the constructor of a
 *       Field class.
 *
 * @typedef {Object} FieldDescription
 */

/**
 * A field.
 *
 * TODO: Formalise as a class?
 *
 * @typedef {Object} Field
 *
 * @property {string}         path             - The path of the field.
 * @property {string}         [parent]         - The path of the field's parent, if any. Overrides the parent that would otherwise be determined from the `path`.
 * @property {string}         [pathFragment]   - The leaf of the field's path. TODO: Rename to key
 * @property {string}         [type]           - The type of the field. Determines the type of value to read and store. Defaults to `'number'`.
 * @property {string}         [input]          - The input type to use for this field, if any. // TODO: Rename? Might not be an actual input... (i.e. section). `element` might be a good name.
 * @property {Object}         [options]        - The input options. A free-form object for different input types to interpret and utilise.
 * @property {string}         [name]           - The field's name. Defaults to a sentence-case translation of the field's key. TODO: Rename to label?
 * @property {string}         [description]    - The field's description.
 * @property {boolean}        [omit=false]     - Whether to prevent storing the field's value in data AND prevent updating any of its children. Defaults to `false`.
 * @property {boolean}        [virtual=false]  - Whether to prevent storing the field's value in data. Defaults to `false`.
 * @property {string|boolean} [visible=true]   - Whether the field is visible. Defaults to `true`. String values are interpreted as expressions.
 * @property {string|boolean} [disabled=false] - Whether the field is disabled. Defaults to `true` if `expression` is set, otherwise defaults to `false`. String values are interpreted as expressions. TODO: Input options?
 * @property {*}              [value]          - The field's value.
 * @property {*}              [default]        - The field's default value. Defaults appropriately for the field's `type`.
 * @property {boolean}        [merge]          - Whether to merge the field's non-scalar value with its default value.
 * @property {string}         [expression]     - An expression used to compute the field's value. Implies `disabled` when set.
 * @property {string}         [validator]      - The field's value validation function. Defaults appropriately for the field's `type`.
 * @property {string}         [extends]        - The path of a field to inherit from.
 * @property {string}         [extended]       - The path of a field that been has inherited from.
 * @property {string}         [mirror]         - The path of a field to mirror. TODO: Implement
 * @property {Field[]}        [children]       - Child fields.
 * @property {string}         [template]       - Template field that all child fields should extend. Can be a `Field` or a `path` to a field.
 * @property {Object|array}   [fixed]          - A map or list of child keys that cannot be removed at runtime, if present.
 */
