function Select(row, col) {
  let newState = {};
  newState.active = {row: row, col: col, dir: this.state.active.dir, num: this.state.active.num};
  let old = {row: this.state.active.row, col: this.state.active.col};
  // change active direction if necessary
  newState.active.dir = this.AdjustDirection(newState.active.dir, row, col, old.row, old.col)
  newState.active.num = this.state.grid.values[row][col][newState.active.dir]
  this.setState(() => {
    return {
      active: newState.active,
      colours: newState.colours
    }
  })
}

export default Select;