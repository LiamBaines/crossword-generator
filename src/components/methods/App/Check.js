async function Check() {
  if (this.state.loading == false && this.state.locked == false) {
    await this.ResetAnimation();
    await this.setState(currentState => {
      let incorrect = 0;
      let score = 0;
      for (let i = 0; i < currentState.height; i++) {
        for (let j = 0; j < currentState.width; j++) {
          let square = currentState.grid.values[i][j];
          if (square.answer != 'x') {
            if (square.guess != square.answer) {
              if (square.guess) {
                square.animation = 'incorrect';
              }
              incorrect++;
              square.guess = undefined;
            } else {
              score++
            }
          }
        }
      }
      if (incorrect == 0) {
        for (let i = 0; i < currentState.height; i++) {
          for (let j = 0; j < currentState.height; j++) {
            let square = currentState.grid.values[i][j]
            if (square.answer == square.guess) {
              square.animation = 'correct';
            }
          }
        }
        return {
          grid: currentState.grid,
          score: score,
          locked: true,
          success: true
        }
      }
      else return {
        grid: currentState.grid,
        score: score
      }
    })
    setTimeout(this.ResetAnimation, 1000)
  }
}

export default Check;