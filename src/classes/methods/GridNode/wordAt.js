function wordAt(num, dir) {
  let coords = this.coordsAt(num, dir)
  let str = '';
  for (let arr of coords) {
    str = str.concat(this.values[arr[0]][arr[1]].answer)
  }
  return str;
}

export default wordAt;