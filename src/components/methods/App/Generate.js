import GridNode from '../../../classes/GridNode.js'

async function Generate() {
  await this.setState(() => {
    return {
      active: {row: 0, col: 0, num: 1, dir: 'across'},
      grid: new GridNode(),
      loading: true,
      score: 0
    }
  })
  let grid = await this.state.grid.generate();
  this.setState(() => {
    return {
      grid: grid,
      width: grid.values[0].length,
      height: grid.values.length,
      locked: false,
      loading: false,
      success: false
    }
  })
}

export default Generate;