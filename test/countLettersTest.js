const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it('should match length 10 given "lighthouse in the house"', () => {
    assert.strictEqual(Object.keys(countLetters('lighthouse in the house')).length, 10);
  });

  it('should match length 5 given "foo bar"', () => {
    assert.strictEqual(Object.keys(countLetters('foo bar')).length, 5);
  });

  it('should match length 11 given "hey i just coded this"', () => {
    assert.strictEqual(Object.keys(countLetters('hey i just coded this')).length, 11);
  });

  it('should match length 12 given "twelve thousand"', () => {
    assert.strictEqual(Object.keys(countLetters('twelve thousand')).length, 12);
  });
});