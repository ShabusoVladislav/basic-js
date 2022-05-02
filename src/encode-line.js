const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if(str == "") return '';
  let counter = 1;
  let tmpStr = '';
  for(let i = 1; i < str.length; i++){
    if(str[i] == str[i - 1]){
      counter++;
    } else{
      if(counter > 1){
        tmpStr += counter;
      }
      tmpStr += str[i - 1];
      counter = 1;
    }
  }
  if(counter > 1){
    tmpStr += counter;
  }
  tmpStr += str[str.length - 1];
  return(tmpStr);
}

module.exports = {
  encodeLine
};
