async function GroupSquares() {
  this.setState(currentState => {
    let max = 0;
    // iterate through grid, figuring out which word each square belongs to
    for (let row of currentState.grid) {
      for (let square of row) {
        if (square.answer != 'x') {
          // if there is a left neighbour, copy its across value
          if (this.ValidNeighbour(square.row, square.col, 'left') == true) {
            square.across = currentState.grid[square.row][square.col - 1].across
          }
          // else, copy own number value
          else {
            square.across = (square.num !== 0 && this.ValidNeighbour(square.row, square.col, 'right') == true) ? square.num : undefined;
            if (square.across > max) max = square.across
          }
          // if there is an above neighbour, copy its down value
          if (this.ValidNeighbour(square.row, square.col, 'up') == true) {
            square.down = currentState.grid[square.row - 1][square.col].down
          }
          // else, copy own number value
          else {
            square.down = (square.num !== 0 && this.ValidNeighbour(square.row, square.col, 'down') == true) ? square.num : undefined;
            if (square.down > max) max = square.down
          }
        }
      }
    }
    console.log(`Finished grouping squares`)
    return {
      grid: currentState.grid,
      maxNum: max
    }
  })
}

export default GroupSquares;