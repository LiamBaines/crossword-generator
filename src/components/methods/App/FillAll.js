async function FillAll(n = 0) {
  //reset should go here
  let [num, dir] = this.state.fillOrder[n]
  this.Reset(n)
  .then(() => this.FetchWord(this.WordAt(num, dir)))
  .then(this.CleanWord)
  .then((obj) => {
    this.Fill(obj, num, dir)
  })
  //this block shouldn't run if there was an error
  .then((result) => {
    if (n < 25) {
      this.FillAll(n + 1)
    }
    else {
      console.log(`Reached boundary (n = ${n} = ${num} ${dir})`);
      this.setState(() => {
        return {
          loading: false,
          locked: false
        }
      })
    }
  })
  // catch if no valid words returned
  .catch((err) => {
    console.log(`Crossword generation failed at bound ${n}`)
    this.FillAll(0)
  })
}

export default FillAll;