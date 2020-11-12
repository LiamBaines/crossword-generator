import React from 'react';
import { numbersArray } from '../library/defaults'

function GridSquareWhite(props) {

  let char = (props.square.guess !== 'x') ? props.square.guess : '';
  let num = (numbersArray[props.rowNum][props.colNum] === 0) ? '' : numbersArray[props.rowNum][props.colNum];
  
  let subClass = 'whitesquare'
  let color;
  if (props.locked == false) {
    if (props.square[props.active.dir] == props.active.num) subClass = 'lightbluesquare'
    if (props.active.row == props.rowNum && props.active.col == props.colNum) subClass = 'bluesquare'  
  }
  if (props.square.animation == 'incorrect') console.log(props.square.animation)
  if (props.square.corrected == true) color = 'red';
  let style = {
    color: color,
    cursor: 'pointer',
    animationName: props.square.animation,
    animationDuration: '1s'
  }
  return (
    <td className={subClass} style={style} onClick={() => props.select(props.rowNum, props.colNum)}>
      <span className="number">{num}</span>
      <div className="letter">{char}</div>
    </td>
  )
}

export default GridSquareWhite;