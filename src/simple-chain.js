const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  value : '',
  getLength() {
    return this.value.split('~~').length;
  },
  addLink(value) {
    if(this.value.length === 0) this.value = `( ${value} )`;
    else this.value += `~~( ${value} )`;
    return this;
  },
  removeLink(position) {
    let tmpArr = this.value.split('~~');
    if (isNaN(+position) || position < 1 || position > tmpArr.length) {
      this.value = '';
      throw new Error('You can\'t remove incorrect link!');
    }
    tmpArr.splice(position - 1, 1);
    this.value = tmpArr.join('~~');
    return this;
  },
  reverseChain() {
    let tmpArr = this.value.split('~~');
    tmpArr.reverse();
    this.value = tmpArr.join('~~');
    return this;
  },
  finishChain() {
    const str = this.value;
    this.value = '';
    return str;
  }
};

module.exports = {
  chainMaker
};
