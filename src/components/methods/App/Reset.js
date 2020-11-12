import gridBlank from '../../../library/gridBlank.js'

async function Reset(n) {
  return new Promise((resolve, reject) => {
    if (n == 0) {
      this.setState(currentState => {
        return {
          grid: gridBlank(),
          loading: true
        }
      })
    }
    resolve()
  })
}

export default Reset;