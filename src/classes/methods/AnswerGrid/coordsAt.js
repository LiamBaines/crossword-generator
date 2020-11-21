function coordsAt(num, dir) {
  let coords = [];
  for (let i = 0; i < 13; i++) {
    for (let j = 0; j < 13; j++) {
      if (this.values[i][j][dir] == num) coords.push([i, j])
    }
  }
  return (coords.length > 0) ? coords : undefined;
}

export default coordsAt;