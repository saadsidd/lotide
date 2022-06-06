const assert = require('chai').assert;
const middle = require('../middle');

// Test cases for middle.js
describe('#middle', () => {
  it('should return [] when given [1]', () => {
    const input = [1];
    const output = [];
    assert.deepEqual(middle(input), output);
  });

  it('should return [] when given [1, 2]', () => {
    const input = [1, 2];
    const output = [];
    assert.deepEqual(middle(input), output);
  });

  it('should return [2] when given [1, 2, 3]', () => {
    const input = [1, 2, 3];
    const output = [2];
    assert.deepEqual(middle(input), output);
  });

  it('should return [3] when given [1, 2, 3, 4, 5]', () => {
    const input = [1, 2, 3];
    const output = [2];
    assert.deepEqual(middle(input), output);
  });

  it('should return [2, 3] when given [1, 2, 3, 4]', () => {
    const input = [1, 2, 3];
    const output = [2];
    assert.deepEqual(middle(input), output);
  });

  it('should return [3, 4] when given [1, 2, 3, 4, 5, 6]', () => {
    const input = [1, 2, 3];
    const output = [2];
    assert.deepEqual(middle(input), output);
  });
});