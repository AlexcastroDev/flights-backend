function getConstructorName(variable) {
  switch (variable) {
    case 'string':
      return String;
    case 'number':
      return Number;
    case 'boolean':
      return Boolean;
    case 'object':
      return Object;
    case 'array':
      return Array;
    case 'function':
      return Function;
    case 'symbol':
      return Symbol;
    case 'null':
      return null;
    case 'undefined':
    default:
      return undefined;
  }
}

/**
 * @param {object} object
 * @param {object} schema
 * @returns {void}
 * @example
 * Object: { id: 1, name: 'John Doe' }
 * Schema: { id: Number, name: String }
 */
export default function AssertObject(object, schema) {
  Object.keys(schema).forEach((key) => {
    if (getConstructorName(typeof object[key]) !== schema[key]) {
      throw new Error(`${object[key]} is not type of ${schema[key].name}`);
    }
  });
}
