const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {
  it('should keep original passed array unchanged', () => {
    const input = ["hello", "world", "lighthouse"];
    without(input, ["lighthouse"]);
    assert.deepEqual(input, ["hello", "world", "lighthouse"]);
  });

  it('should return [2, 3] given [1, 2, 3]', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it('should return ["3"] given ["1", "2", "3"]', () => {
    assert.deepEqual(without(['1', '2', '3'], ['1', '2', 3]), ['3']);
  });
});