import $ from 'jquery';
import isAlpha from '../../../library/isAlpha.js'
import shuffleArray from '../../../library/shuffleArray.js'

async function getSuccessors(num, dir) {
  let param = this.wordAt(num, dir)
  let url = `https://api.datamuse.com/words?sp=${param}&md=d&max=500`;
  const promise = $.get(url)
    .then((wordsArray) => {
      // discard obscure words
      let validWords = wordsArray.filter((obj) => (obj.defs && isAlpha(obj.word) == true && obj.score > 400 && obj.defHeadword == undefined));  
      // format word definitions
      let formattedWords = validWords.map(obj => {
        let word = obj.word.toUpperCase().split('')
        let def = obj.defs[0];
        def = def.substr(def.indexOf(String.fromCharCode(9)) + 1);
        def = def.substr(0, 1).toUpperCase().concat(def.substr(1)).concat(` (${obj.word.length})`)
        if (def.substr(0,1) == '(') def = '('.concat(def.substr(1,1).toUpperCase()).concat(def.substr(2))
        return {word: word, def: def}
      });  
      shuffleArray(formattedWords);
      if (!param.split('').some(char => char == '?')) console.log(`(${num} ${dir}) parameter ${param} returned ${formattedWords.map(obj => obj.word.join(''))}`)
      return formattedWords;
    })
  return await promise;
}  

export default getSuccessors;