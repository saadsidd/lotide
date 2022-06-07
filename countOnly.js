// Returns count of specific matching string from array of strings
// example: allItems = ['a', 'a', 'a', 'b', 'c'];
// itemsToCount = ['a': true, 'c': true];
// return --> { 'a': 3, 'c': 1}
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item] === undefined) {
        results[item] = 0;
      }
      results[item]++;
    }
  }

  return results;
};

module.exports = countOnly;