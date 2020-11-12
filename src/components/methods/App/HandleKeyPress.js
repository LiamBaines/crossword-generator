// import Delete from './Delete.js'
// import InputCharacter from './InputCharacter.js'
// import MoveActive from './MoveActive.js'

async function HandleKeyPress(e) {
  //move
  if (e.keyCode > 36 && e.keyCode < 41) this.MoveActive(e.key);
  if (this.state.locked == false) {
    //input character
    if (e.keyCode > 64 && e.keyCode < 123) this.InputCharacter(e.key);
    //backspace/delete
    if (e.keyCode == 8 || e.keyCode == 46) {
      //if cell is filled, delete contents
      if (this.state.grid.values[this.state.active.row][this.state.active.col].guess != 'x') {
        this.Delete()
      }
      //else, move back one and delete that
      else {
        let key = (this.state.active.dir == 'across') ? 'ArrowLeft' : 'ArrowUp';
        this.MoveActive(key)
        .then(this.Delete())
      }
    }
  }
}

export default HandleKeyPress;