const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
let count = 0;
let cat = matrix;
let ears = '^^';
console.log(cat);
for(let i = 0; i < cat.length; i++) {
  for(let j = 0; j < cat[i].length; j++) {
    if(cat[i][j] === ears) {
      count++
    }
  }
}
return count;


}
module.exports = {
  countCats
};
