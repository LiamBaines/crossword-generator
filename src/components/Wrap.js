import React from 'react';

import Buttons from './Buttons.js'
import Clue from './Clue.js'
import Grid from './Grid.js'
import Score from './Score.js'

function Wrap(props) {
  return (
    <div className="App">
      <header>
        {Buttons(props)}
      </header>
      <header className="App-header">
        <div id="wrap">
          {Score(props)}
          {Grid(props)}
          {Clue(props)}
        </div>
      </header>
    </div>
  )
}

export default Wrap;