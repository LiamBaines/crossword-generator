import React from 'react';

function Clue(props) {
  let clue;
  if (props.loading == true) clue = 'Loading...';
  else clue = `${props.active.num}. ${props.grid.definitions[props.active.dir][props.active.num]}`
  return (
    <div className = "clue">
      <p>{clue}</p>
    </div>
  )
 }

export default Clue;