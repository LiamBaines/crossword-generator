function Success() {
  this.setState(currentState => {
    let score = 0;
    for (let i = 0; i < currentState.height; i++) {
      for (let j = 0; j < currentState.width; j++) {
        let square = currentState.grid.values[i][j];
        square.animation = 'correct';
        score++
      }
    }
    return {
      grid: currentState.grid,
      score: score,
      locked: true,
      success: true
    }
  })
}

export default Success;