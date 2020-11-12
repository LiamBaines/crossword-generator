async function CleanWord(data) {
  //console.log(data)
  return new Promise((resolve, reject) => {
    function isAlpha(str) {
      for (let i = 0; i < str.length; i++) {
        if (str[i].charCodeAt() < 97 || str.charCodeAt() > 122) return false;
      }
      return true;
    }
    let validWords = data.filter(obj => obj.defs !== undefined && obj.defHeadword == undefined && obj.score > 0 && isAlpha(obj.word))
    if (validWords.length > 0) {
      let ran = Math.floor(validWords.length * Math.random())
      let word = validWords[ran].word.split('').map(char => char.toUpperCase())
      //console.log(validWords[ran].word, validWords[ran].score)
      let def = validWords[ran].defs[0]
      def = def.substr(def.indexOf(String.fromCharCode(9)) + 1);
      def = def.substr(0, 1).toUpperCase().concat(def.substr(1)).concat(` (${word.length})`)
      if (def.substr(0,1) == '(') def = '('.concat(def.substr(1,1).toUpperCase()).concat(def.substr(2))
      let obj = {word: word, def: def}
      resolve(obj)
    } else {
      reject ('No valid words')
    }
  })
}

export default CleanWord;