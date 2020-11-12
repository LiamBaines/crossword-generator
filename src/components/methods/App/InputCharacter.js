function InputCharacter(key) {
  this.setState(currentState => {
    let row = this.state.active.row;
    let col = this.state.active.col;
    currentState.grid.values[row][col].guess = key.toUpperCase();
    if (currentState.active.dir == 'across') {
      if (this.ValidNeighbour(row, col, 'right')) {
        currentState.active.col++
      }
    }
    if (currentState.active.dir == 'down') {
      if (this.ValidNeighbour(row, col, 'down')) {
        currentState.active.row++
      } 
    }
    return {
      guesses: currentState.guesses,
      colours: currentState.colours,
      active: currentState.active,
      animation: ''
    }
  })
}

export default InputCharacter;