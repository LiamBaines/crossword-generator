import Square from './Square.js'

class ReactSquare extends Square {
  constructor(answer, across, down, row, col, guess, colour, num) {
    super(answer, across, down)
    this.row = row;
    this.col = col;
    this.guess = guess;
    this.colour = colour;
    this.num = num;
  }
}

export default ReactSquare;