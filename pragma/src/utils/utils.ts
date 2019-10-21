/**
 * Parse a field definition from a JSON object string or a JavaScript object.
 *
 * Throws an error if the given value is not a string or an object.
 *
 * @param {string|object} field - The field definition to parse.
 * @return {object} The parsed JSON object.
 * @throws {Error} If the given value is not a string or an object. Accepts null.
 */
export function parseFieldDefinition(field?: string|object)
{
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
export function parseJson(value: any): any {
  if (typeof value === 'string')
    value = JSON.parse(value);

  return value;
}
