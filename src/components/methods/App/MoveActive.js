async function MoveActive(key) {
  let dir = key[5].toLowerCase().concat(key.slice(6));
  let row = this.state.active.row;
  let col = this.state.active.col;
  if (!this.ValidNeighbour(row, col, dir)) return;
  let newRow;
  let newCol;
  if (dir == 'up') [newRow, newCol] = [row - 1, col];
  if (dir == 'down') [newRow, newCol] = [row + 1, col];
  if (dir == 'left') [newRow, newCol] = [row, col - 1];
  if (dir == 'right') [newRow, newCol] = [row, col + 1];
  this.Select(newRow, newCol)
}

export default MoveActive;