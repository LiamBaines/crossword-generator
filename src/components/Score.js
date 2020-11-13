import React from 'react';

function Score(props) {
  return (
    <div className = "score">
      <p>{`Score: ${props.score}`}</p>
    </div>
  )
 }

export default Score;