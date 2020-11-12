import $ from 'jquery';

async function FetchWord(param) {
  let url = `https://api.datamuse.com/words?sp=${param}&md=d`;
  return $.get(url)
}

export default FetchWord;