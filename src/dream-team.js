const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  let names = members;
  let creatName = [];
  for (let i = 0; i < names.length; i++) {
    if (typeof names[i] === 'string') {
      names[i] = names[i].trim().toUpperCase();
      creatName.push(names[i][0]);
    }
  }
  creatName.sort();
  return creatName.join('');
}
createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']);  'ADMM';
createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]);'LOO';

module.exports = {
  createDreamTeam
};
