async function ResetAnimation() {
  this.setState(currentState => {
    for (let i = 0; i < currentState.height; i++) {
      for (let j = 0; j < currentState.width; j++) {
        currentState.grid.values[i][j].animation = 'none';
      }
    }
    return {
      grid: currentState.grid
    }
  })  
}

export default ResetAnimation;