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
  let tmpStr = str;
  let addArr = [];
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    addArr.push(options.addition);
  }
  let addStr = addArr.join(options.additionSeparator || '|');
  addStr += options.separator || '+';

  let strArr = [];
  for(let i = 0; i < options.repeatTimes; i++) {
    strArr.push(str);
  }

  let strStr = strArr.join(addStr);
  return strStr;
}

module.exports = {
  repeater
};
