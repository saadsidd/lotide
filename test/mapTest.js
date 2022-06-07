const assert = require('chai').assert;
const map = require('../map');

describe('#map', () => {
  it('should return first letter of each word', () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), ['g', 'c', 't', 'm', 't']);
  });

  it('should return each number doubled', () => {
    assert.deepEqual(map([1, 2, 3, 4, 5, 6], num => num * 2), [2, 4, 6, 8, 10, 12]);
  });

  it('should return array with any string numbers converted to number type', () => {
    assert.deepEqual(map(['1', 2, 3, '4', 5, '6', '7', 8, '9'], num => {
      if (typeof num === 'string') return Number(num);
      return num;
    }), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});