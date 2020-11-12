function ValidNeighbour(row, col, position) {
  if (position == 'up') {
    if (row == 0) return false;
    else if (this.state.grid.values[row - 1][col].answer == 'x') return false;
  }
  if (position == 'down') {
    if (row == this.state.height - 1) return false;
    else if (this.state.grid.values[row + 1][col].answer == 'x') return false;
  }
  if (position == 'left') {
    if (col == 0) return false;
    else if (this.state.grid.values[row][col - 1].answer == 'x') return false;
  }
  if (position == 'right') {
    if (col == this.state.width - 1) return false;
    else if (this.state.grid.values[row][col + 1].answer == 'x') return false;
  }
  return true;
}

export default ValidNeighbour;