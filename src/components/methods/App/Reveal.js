function Reveal() {
  console.log('Revealing')
  if (this.state.locked == false) {
    this.setState(currentState => {
      let score = 0;
      for (let i = 0; i < currentState.height; i++) {
        for (let j = 0; j < currentState.width; j++) {
          let square = currentState.grid.values[i][j];
          if (square.guess == square.answer) {
            square.animation = 'correct';
            score++
          }
          else {
            square.guess = square.answer
            square.animation = 'incorrect';
            square.corrected = true;
          }
        }
      }
      return {
        grid: currentState.grid,
        score: score,
        locked: true
      }
    })
  }
}

export default Reveal;