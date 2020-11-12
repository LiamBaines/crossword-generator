async function Check() {
  this.setState(currentState => {
    let incorrect = 0;
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
          }
        }
      }
    }
    let result = (incorrect == 0) ? 'correct' : 'incorrect';
    return {
      grid: currentState.grid,
      animation: result
    }
  })
}

export default Check;