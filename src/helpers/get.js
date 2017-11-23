import _get from 'lodash/get';

export function get(object, property, defaultValue) {
  return _get(object, property, defaultValue);
}

// Get nested object property with definite type
export const getNumberValue = (object, property, defaultValue = 0, parse = parseFloat) => {
  let defValue = defaultValue;
  if (typeof defaultValue !== typeof 0) {
    console.warn('defaultValue is not integer', object, property, defaultValue);
    defValue = 0;
  }

  let value = defValue;
  if (property !== '' && property !== undefined && property !== null) {
    value = get(object, property, defValue);
  }

  value = parse(value);
  if (isNaN(value)) {
    // console.warn('value is NaN', object, property, defaultValue);
    value = defValue;
  }
  return value;
};

export const getIntegerValue = (object, property, defaultValue) =>
  getNumberValue(object, property, defaultValue, parseInt);

export const getFloatValue = (object, property, defaultValue) =>
  getNumberValue(object, property, defaultValue);

export const getStringValue = (object, property, defaultValue = '') => {
  let defValue = defaultValue;
  if (typeof defaultValue !== typeof '') {
    console.warn('defaultValue is not string', object, property, defaultValue);
    defValue = '';
  }

  let value = defValue;
  if (property !== '' && property !== undefined && property !== null) {
    value = get(object, property, defValue);
  }
  value = String(value);
  return value;
};

export const getArrayValue = (object, property, defaultValue = []) => {
  let defValue = defaultValue;
  if (!Array.isArray(defaultValue)) {
    console.warn('defaultValue is not an array', object, property, defaultValue);
    defValue = [];
  }

  let value = defValue;
  if (property !== '' && property !== undefined && property !== null) {
    value = get(object, property, defValue);
  }
  if (!Array.isArray(value)) {
    // console.warn('value is not array', object, property, defaultValue);
    value = defValue;
  }
  return value;
};

export const getBooleanValue = (object, property, defaultValue = false) => {
  let defValue = defaultValue;
  if (typeof defaultValue !== 'boolean') {
    console.warn('defaultValue is not a boolean', object, property, defaultValue);
    defValue = false;
  }

  let value = defValue;
  if (property !== '' && property !== undefined && property !== null) {
    value = get(object, property, defValue);
  }
  if (typeof value !== 'boolean') {
    // console.warn('value is not boolean', object, property, defaultValue);
    value = defValue;
  }
  return value;
};

export const getObjectValue = (object, property, defaultValue = {}) => {
  let defValue = defaultValue;
  if (typeof defaultValue !== 'object') {
    console.warn('defaultValue is not an object', object, property, defaultValue);
    defValue = {};
  }

  let value = defValue;
  if (property !== '' && property !== undefined && property !== null) {
    value = get(object, property, defValue);
  }
  if (typeof value !== 'object') {
    // console.warn('value is not object', object, property, defaultValue);
    value = defValue;
  }
  return value;
};

export const getValue = {
  boolean: getBooleanValue,
  array: getArrayValue,
  string: getStringValue,
  float: getFloatValue,
  integer: getIntegerValue,
  object: getObjectValue,
};
