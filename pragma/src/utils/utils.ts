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
