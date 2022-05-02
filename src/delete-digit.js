const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let tmpArr = n.toString().split('');
  tmpArr = tmpArr.map(item => {
    return parseInt(item);
  })
  tmpArr.splice(tmpArr.indexOf(Math.min(...tmpArr)), 1);
  return +tmpArr.join('');
}

module.exports = {
  deleteDigit
};
