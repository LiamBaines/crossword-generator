function backtrack() {
  let str = ''
  let coords = this.lastAdded.pop();
  for (let arr of coords) {
    str = str.concat(this.values[arr[0]][arr[1]].answer)
    this.values[arr[0]][arr[1]].answer = '?'
  }
}

export default backtrack;