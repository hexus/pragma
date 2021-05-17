import { parseJson } from './utils';

describe('parseJson', () => {
  it('returns an object if a JSON object string is given', () => {
    expect(parseJson('{"test": "test"}')).toEqual({test: 'test'});
  });

  it('returns a string if a JSON string is given', () => {
    expect(parseJson('"string"')).toEqual('string');
  });

  // Testing for the SyntaxError throw doesn't work for some reason
  it('throws an error if invalid JSON is given', () => {
    expect(() => parseJson('string')).toThrow(SyntaxError);
  });
});
