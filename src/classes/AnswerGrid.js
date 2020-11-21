import { acrossArray, answersArray, downArray, numbersArray, fillOrder } from '../library/defaults.js'
import Square from './Square.js'

import backtrack from './methods/AnswerGrid/backtrack.js'
import coordsAt from './methods/AnswerGrid/coordsAt.js'
import generate from './methods/AnswerGrid/generate.js'
import getSuccessors from './methods/AnswerGrid/getSuccessors.js'
import insert from './methods/AnswerGrid/insert.js'
import wordAt from './methods/AnswerGrid/wordAt.js'

class AnswerGrid {
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

export default AnswerGrid;