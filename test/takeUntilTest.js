const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('#takeUntil', () => {
  it('should return [1, 2, 5, 7, 2] for x < 0 callback', () => {
    const input = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(input, x => x < 0), [1, 2, 5, 7, 2]);
  });

  it('should return ["I\'ve", "been", "to", "Hollywood"] for x === "," callback', () => {
    const input = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    assert.deepEqual(takeUntil(input, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);
  });
});