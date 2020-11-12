function AdjustDirection(dir, row, col, oldRow, oldCol) {
  let square = this.state.grid.values[row][col]
  if (square.across !== 0 && square.down !== 0 && row == oldRow & col == oldCol) return (dir == 'across') ? 'down' : 'across';
  if (dir == 'across' && square.across == 0) return 'down';
  else if (dir == 'down' && square.down == 0) return 'across';
  return dir;
} 

export default AdjustDirection;