function insert(num, dir, obj) {
  let coords = this.coordsAt(num, dir)
  let added = []
  for (let i = 0; i < obj.word.length; i++) {
    let arr = coords[i]
    if (this.values[arr[0]][arr[1]].answer == '?') added.push(arr)
    this.values[arr[0]][arr[1]].answer = obj.word[i];
  }
  this.lastAdded.push(added)
  this.definitions[dir][num] = obj.def
}

export default insert;