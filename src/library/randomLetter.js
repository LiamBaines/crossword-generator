function randomLetter() {
  let randomInteger = Math.floor(26 * Math.random());
  let char = String.fromCharCode(randomInteger + 65);
  return char;
}

export default randomLetter;