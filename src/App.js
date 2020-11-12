//classes
import GridNode from './classes/GridNode.js'

// components
import Wrap from './components/Wrap.js'

// methods
import AdjustDirection from './components/methods/App/AdjustDirection.js'
import Check from './components/methods/App/Check.js'
import Delete from './components/methods/App/Delete.js'
import Generate from './components/methods/App/Generate.js'
import HandleKeyPress from './components/methods/App/HandleKeyPress'
import InputCharacter from './components/methods/App/InputCharacter.js'
import MoveActive from './components/methods/App/MoveActive.js'
import Reveal from './components/methods/App/Reveal.js'
import ResetAnimation from './components/methods/App/ResetAnimation.js'
import Select from './components/methods/App/Select.js'
import Success from './components/methods/App/Success.js'
import ValidNeighbour from './components/methods/App/ValidNeighbour.js'

// node modules
import React from 'react';

// styles
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.AdjustDirection = AdjustDirection.bind(this);
    this.Check = Check.bind(this);
    this.Delete = Delete.bind(this);  
    this.Generate = Generate.bind(this);
    this.HandleKeyPress = HandleKeyPress.bind(this);
    this.InputCharacter = InputCharacter.bind(this);
    this.MoveActive = MoveActive.bind(this);
    this.ResetAnimation = ResetAnimation.bind(this);
    this.Reveal = Reveal.bind(this);
    this.Select = Select.bind(this);
    this.Success = Success.bind(this);
    this.ValidNeighbour = ValidNeighbour.bind(this);
    document.addEventListener('keydown', this.HandleKeyPress);
    this.state = {
      active: {row: 0, col: 0, num: 1, dir: 'across'},
      grid: new GridNode(),
      height: 13,
      loading: true,
      locked: false,
      score: 0,
      success: false,
      width: 13
    };
  } 
  render() {
    return (
          <Wrap
            active={this.state.active}
            animation={this.state.animation}
            check={this.Check}
            generate={this.Generate}
            grid={this.state.grid}
            loading={this.state.loading}
            locked={this.state.locked}
            reveal={this.Reveal}
            score={this.state.score}
            select={this.Select}      
            success={this.state.success}   
          />  
    )
  }
  componentDidMount() {
    this.Generate();
  }
}

export default App;
