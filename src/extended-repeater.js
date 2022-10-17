const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = [];
  if('repeatTimes' in options) {
    for(let i = 1; i <= options.repeatTimes; i++) {
      res.push(str);
      if('addition' in options) {
        for(let i = 1; i <= options.additionRepeatTimes; i++) {
          res.push(options.addition);
          if(options.additionRepeatTimes > 1) {
            if('additionSeparator' in options) {
              if(i === options.additionRepeatTimes) {
                break;
              }
              res.push(options.additionSeparator);
            }else {
              res.push('|');
            }
          }
        }      
      }
      if(options.repeatTimes > 1) {
        if(i === options.repeatTimes) {
          break;
        }
        if('separator' in options) {
          res.push(options.separator);
        }else {
          res.push('+');
        }
      }
    }
  }else {
    res.push(str);
      if('addition' in options) {
        if('additionRepeatTimes' in options) {
          for(let i = 1; i <= options.additionRepeatTimes; i++) {
            res.push(options.addition);
            if(options.additionRepeatTimes > 1) {
              if('additionSeparator' in options) {
                if(i === options.additionRepeatTimes) {
                  break;
                }
                res.push(options.additionSeparator);
              }else {
                res.push('|');
              }
            }
          }
        }else {
          res.push(options.addition);
        }
      
      }
      if(options.repeatTimes > 1) {
        if('separator' in options) {
          res.push(options.separator);
        }else {
          res.push('+');
        }
      }
    }
  return res.join('');

}

module.exports = {
  repeater
};
