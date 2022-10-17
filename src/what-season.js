const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date) {
    return 'Unable to determine the time of year!';
  }
  if(date instanceof Date == false) {
    throw new Error('Invalid date!');
  }
  if (Object.getOwnPropertyNames(date).length > 0) {
    throw Error('Invalid date!');
  }
  // console.log(Date.parse(date));
  let summer = [5, 6, 7];
  let spring = [2, 3, 4];
  let winter = [11, 0, 1];
  let autumn = [8, 9, 10];
  if(summer.includes(date.getMonth())) {
    return 'summer';
  }
  if(spring.includes(date.getMonth())) {
    return 'spring';
  }
  if(winter.includes(date.getMonth())) {
    return 'winter';
  }
  if(autumn.includes(date.getMonth())) {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
