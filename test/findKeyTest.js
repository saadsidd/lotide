const assert = require('chai').assert;
const findKey = require('../findKey');

describe('#findKey', () => {
  it('should return "noma" given x.stars === 2 callback', () => {
    const restaurants = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    assert.strictEqual(findKey(restaurants, x => x.stars === 2), 'noma');
  });

  it('should return "The Wire" given x.score > 9 callback', () => {
    const tvShows = {
      'The Expanse':        { score: 8.5 },
      'Brooklyn Nine-Nine': { score : 8.4},
      'The Wire':           { score: 9.3 },
      'That 70s Show':      { score: 8.1 }
    };
    assert.strictEqual(findKey(tvShows, x => x.score > 9), 'The Wire');
  });
});