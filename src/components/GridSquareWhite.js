import React from 'react';
import { numbersArray } from '../library/defaults'

function GridSquareWhite(props) {

  let char = (props.square.guess !== 'x') ? props.square.guess : '';
  let num = (numbersArray[props.rowNum][props.colNum] === 0) ? '' : numbersArray[props.rowNum][props.colNum];
  
  let subClass = 'whitesquare'
  let color;
  //if (props.locked == false) {
    if (props.square[props.active.dir] == props.active.num) subClass = 'lightbluesquare'
    if (props.active.row == props.rowNum && props.active.col == props.colNum) subClass = 'bluesquare'  
  //}
  if (props.locked == true) {
    if (props.square.corrected == true) color = 'red';
    if (props.success == true) color = '#08c90f';
  }
  let delay = (props.loading == true) ? (0.05 * props.rowNum).toString().concat('s') : '0s';
  let duration = (props.loading == true) ? '2s' : '1s';
  let count = (props.loading == true) ? 'infinite' : '';
  let style = {
    color: color,
    cursor: 'pointer',
    animationName: props.square.animation,
    animationDuration: duration,
    animationDelay: delay,
    animationIterationCount: count,
  }
  if (props.loading == true) style.animationName = 'loading';
  let id = `row${props.rowNum}col${props.colNum}`
  return (
    <td className={subClass} style={style} onClick={() => props.select(props.rowNum, props.colNum)}>
      <span className="number">{num}</span>
      <div className="letter">{char}</div>
      <input id={id} type="text" className="letterInput"/>
    </td>
  )
}

export default GridSquareWhite;