const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(arr instanceof Array){
    let tmpArr = arr.slice();
    for(let i = 0; i < tmpArr.length; i++){
      switch(tmpArr[i]){
        case '--discard-next':
          tmpArr.splice(i + 1, 1);
          break;
        case '--discard-prev':
          if (i > 0) tmpArr.splice(i - 1, 1);
          break;
        case '--double-next':
          tmpArr.splice(i + 1, 1, tmpArr[i + 1]);
          break;
        case '--double-prev':
          tmpArr.splice(i - 1, 1, tmpArr[i - 1]);
          break;
        default:
          break;
      }
    }
    // let i = 0;
    // while(i < tmpArr.length){
    //   if(tmpArr[i] === '--double-next'
    //   || tmpArr[i] === '--double-prev'
    //   || tmpArr[i] === '--discard-next'
    //   || tmpArr[i] === '--discard-prev'){
    //     tmpArr.splice(i, 1);
    //   }
    // }
    return tmpArr;
  } else throw new Error("'arr' parameter must be an instance of the Array!");
  // throw new NotImplementedError('Not implemented');
}

module.exports = {
  transform
};
