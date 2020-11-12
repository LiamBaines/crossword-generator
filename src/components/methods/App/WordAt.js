function WordAt(num, dir) {
  let str = '';
  for (let row of this.state.grid) {
    for (let square of row) {
      //console.log(`square.${dir} = ${square[dir]}`)
      if (square[dir] == num) str = str.concat(square.answer)
    }
  }
  //console.log(`${num} ${dir} = ${str}`)
  return (str.length > 0) ? str : undefined;
}

export default WordAt;