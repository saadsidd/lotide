// Returns array from 2nd element onward
const tail = function(array) {
  return array.slice(1, array.length);
};

module.exports = tail;