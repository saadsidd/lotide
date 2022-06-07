const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it('should return true for ab vs ba', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it('should return true for cd vs dc', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.strictEqual(eqObjects(cd, dc), true);
  });
  
  it('should return false for abc vs cba', () => {
    const abc = { a: "1", b: "2", c: "3" };
    const cba = { c: "1", d: ["2", 3, 4] };
    assert.strictEqual(eqObjects(abc, cba), false);
  });
});