import React from 'react';
import GridSquareBlack from './GridSquareBlack';
import GridSquareWhite from './GridSquareWhite';
y
function GridRow(props) {
  let row = [];
  for (let i = 0; i < props.row.length; i++) {
    let config = {
      active: props.active,
      square: props.row[i],
      loading: props.loading,
      locked: props.locked,
      rowNum: props.rowNum,
      colNum: i,
      select: props.select,
      success: props.success
    }
    if (props.row[i].answer === 'x') {
      row.push(GridSquareBlack())
    } else {
      row.push(
        GridSquareWhite(config)
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