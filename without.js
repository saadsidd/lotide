// Removes items from first array that are also in second given array
const without = function(original, itemsToRemove) {
  const source = [...original];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        source.splice(i, 1);
      }
    }
  }
  return source;
};

module.exports = without;