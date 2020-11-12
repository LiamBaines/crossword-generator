function Delete() {
  this.setState(currentState => {
    currentState.grid.values[currentState.active.row][currentState.active.col].guess = 'x'
    return {
      grid: currentState.grid
    }
  })
}

export default Delete;