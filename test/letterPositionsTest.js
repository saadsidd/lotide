const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it('should return ["3", "5", "15", "18"] for letter h', () => {
    assert.deepEqual(letterPositions('lighthouse in the house').h, ['3', '5', '15', '18']);
  });

  it('should return ["2", "3"] for letter l', () => {
    assert.deepEqual(letterPositions('hello').l, ['2', '3']);
  });
});