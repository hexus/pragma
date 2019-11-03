/**
 * Parse and merge a set of field definitions.
 *
 * Accepts JSON object strings or JavaScript objects.
 *
 * If the first argument is an object, its reference is maintained.
 *
 * @param {Array<string|object>} fields - The fields to parse and merge.
 * @return {object} The parsed Field
 */
export function parseAndMergeFields(...fields: Array<string | object>) {
  fields = fields.map(parseField) as Array<object>;

  let field = fields.shift();

  return Object.assign(field, fields.reduce(Object.assign));
}

/**
 * Parse a field definition from a JSON object string or a JavaScript object.
 *
 * Throws an error if the given value is not a string or an object.
 *
 * @param {string|object} field - The field definition to parse.
 * @return {object} The parsed field.
 * @throws {Error} If the given value is not a string or an object. Accepts null.
 */
export function parseField(field?: string | object) {
  if (field == null)
    return {};

  field = parseJson(field);

  if (!Array.isArray(field) && typeof field !== 'object')
    throw Error('Field definition must be a JSON object string or an object literal');

  // TODO: Check for Field type, when it's defined

  return field;
}

/**
 * Loosely parse an value as JSON.
 *
 * Parses as JSON if the value is a string, otherwise returns as-is.
 *
 * @param {*} value
 * @return {*}
 */
export function parseJson(value: any) {
  if (typeof value === 'string')
    value = JSON.parse(value);

  return value;
}
