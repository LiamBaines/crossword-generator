import React from 'react';
import GridSquareBlack from './GridSquareBlack';
import GridSquareWhite from './GridSquareWhite'

function GridRow(props) {
  let row = [];
  for (let i = 0; i < props.row.length; i++) {
    if (props.row[i].answer === 'x') {
      row.push(GridSquareBlack())
    } else {
      row.push(
        GridSquareWhite({
          active: props.active,
          square: props.row[i],
          locked: props.locked,
          rowNum: props.rowNum,
          colNum: i,
          select: props.select,
        })
      )
    }
  }
  return (
    <tr>
      {row}
    </tr>
  )
}

export default GridRow;