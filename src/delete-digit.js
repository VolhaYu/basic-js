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
  let arr = [];
  let string = n.toString();
  let str = string.split('');
  for (let numb of str) {
    numb = +numb;
    arr.push(numb);    
  }
  let max = Math.max.apply(null, arr);
  let i = arr.indexOf(max);
  if(i === 0) {
    arr.splice(i +1, 1);
  }else {
    arr.splice(i -1, 1);
  }
  str = arr.join('');
  let namb = +str;
  return namb;

}

module.exports = {
  deleteDigit
};
