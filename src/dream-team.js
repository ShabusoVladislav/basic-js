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
  if(typeof members == 'object' && members instanceof Array) {
    let arrLetters = [];
    members.forEach(item => {
      if(typeof item === 'string') {
        let ch = (word) => {
          let i = 0;
          while (word[i] == ' '){
            i++;
          }
          return word[i].toUpperCase();
        };
        arrLetters.push(ch(item));
      }
    });
    return arrLetters.sort().join('');
  } else return false;
}
module.exports = {
  createDreamTeam
};
