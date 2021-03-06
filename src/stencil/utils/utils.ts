/**
 * Parse and merge a set of field definitions.
 *
 * Accepts JSON object strings or JavaScript objects.
 *
 * If the first argument is an object, its reference is maintained.
 *
 * TODO: Use a proper merge function.
 *
 * @param {Array<string|object>} fields - The fields to parse and merge.
 * @return {object} The parsed Field
 */
export function parseAndMergeFields(...fields: Array<string | object>): object {
  let parsedFields: Array<object> = fields.map(parseField);

  /**
   * @var {object} field
   */
  let field: object = parsedFields.shift();

  return Object.assign(
    field,
    parsedFields.reduce((previous, current) => {
      return Object.assign(
        Object.assign({}, previous),
        Object.assign({}, current)
      );
    })
  );
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
export function parseField(field?: string | object): object {
  if (field == null)
    return {};

  field = parseJson(field) as object;

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

/**
 * Propagate a DOM event from a given element.
 *
 * @param {HTMLElement} element - The DOM element to propagate the event from.
 * @param {Event} event - The event to propagate.
 */
export function propagateEvent(element: HTMLElement, event: Event) {
  element.dispatchEvent(cloneEvent(event));
}

/**
 * Clone the given DOM event.
 *
 * Typically used for propagating an event that has already been dispatched inside shadow DOM.
 *
 * @param {Event} event - The event to clone.
 * @return {Event} The cloned event.
 */
export function cloneEvent(event: Event) {
  if (event instanceof InputEvent) {
    return new InputEvent(event.type, {
      data: event.data,
      inputType: event.inputType,
      isComposing: event.isComposing
    });
  }

  return new CustomEvent(event.type);
}

/**
 * Dump the given values to the console as formatted JSON.
 *
 * @param {*[]} values
 */
export function dump(...values: any) {
  for (let i = 0; i < values.length; i++) {
    console.log(JSON.stringify(values[i], null, 2));
  }
}
