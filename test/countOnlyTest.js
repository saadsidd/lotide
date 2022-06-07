const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe('#countOnly', () => {
  it('should equal 1 for count of Jason', () => {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result['Jason'], 1);
  });

  it('should equal undefined for count of Karima', () => {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result['Karima'], undefined);
  });

  it('should equal undefined for count of Agouhanna', () => {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result['Agouhanna'], undefined);
  });
});