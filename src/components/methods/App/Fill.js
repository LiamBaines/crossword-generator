async function Fill(obj, num, dir) {
  return new Promise((resolve, reject) => {
    if (obj == undefined) {
      //console.log('Object is undefined')
      reject('No object')
    }
    else {
      if (obj.num == 8 && obj.dir == 'down') console.log('8 down')
      this.setState(currentState => {
        // reset
        currentState.clues[dir][num] = obj.def;
        for (let i = 0; i < currentState.grid.length; i++) {
          for (let j = 0; j < currentState.grid[0].length; j++) {
            if (currentState.grid[i][j][dir] == num) {
              currentState.grid[i][j].answer = obj.word.shift();
            }
          }
        }
        return {
          grid: currentState.grid,
          clues: currentState.clues
        }
      })
      resolve('Went ok.')    
    }
  })  
}

export default Fill;