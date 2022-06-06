const assert = require('chai').assert;
const tail = require('../tail');

// Test cases for tail.js
describe('#tail', () => {
  it('should return [2, 3, 4, 5, 6, 7] when given [1, 2, 3, 4, 5, 6, 7]', () => {
    const input = [1, 2, 3, 4, 5, 6, 7];
    const output = [2, 3, 4, 5, 6, 7];
    assert.deepEqual(tail(input), output);
  });

  it('should return ["Lighthouse", "Labs"] when given ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const input = ['Yo Yo', 'Lighthouse', 'Labs'];
    const output = ['Lighthouse', 'Labs'];
    assert.deepEqual(tail(input), output);
  });
});