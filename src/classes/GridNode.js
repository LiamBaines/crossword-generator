import { acrossArray, answersArray, downArray, numbersArray, fillOrder } from '../library/defaults.js'
import Square from './Square.js'

import backtrack from './methods/GridNode/backtrack.js'
import coordsAt from './methods/GridNode/coordsAt.js'
import generate from './methods/GridNode/generate.js'
import getSuccessors from './methods/GridNode/getSuccessors.js'
import insert from './methods/GridNode/insert.js'
import wordAt from './methods/GridNode/wordAt.js'

class GridNode {
  constructor() {
    this.backtrack = backtrack.bind(this);
    this.coordsAt = coordsAt.bind(this);
    this.generate = generate.bind(this);
    this.getSuccessors = getSuccessors.bind(this);
    this.insert = insert.bind(this);
    this.wordAt = wordAt.bind(this);
    this.lastAdded = [];
    this.fillOrder = fillOrder;
    this.definitions = {
      across: {},
      down: {}
    }
    this.values = [];
    for (let i = 0; i < 13; i++) {
      let row = [];
      for (let j = 0; j < 13; j++) {
        let answer = answersArray[i][j];
        let across = acrossArray[i][j];
        let down = downArray[i][j];
        row.push(new Square(answer, across, down))
      }
      this.values.push(row);
    }
  }  
}

export default GridNode;