const assertObjectsEqual = require('../assertObjectsEqual');

// Test cases for assertObjectsEqual.js
const obj1 = { a: '1', b: 2 };
const obj2 = { b: 2, a: '1' };
assertObjectsEqual(obj1, obj2);

const obj3 = { a: ['1', '2', 3, 4, 5], b: 'hello' };
const obj4 = { b: 'hello', a: ['1', '2', 3, 4, 5] };
assertObjectsEqual(obj3, obj4);