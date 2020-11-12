//classes
import GridNode from './classes/GridNode.js'

// components
import Wrap from './components/Wrap.js'

// library
import gridBlank from './library/gridBlank.js'
import fillOrder from './library/fillOrder.js'

// methods
import AdjustDirection from './components/methods/App/AdjustDirection.js'
import Check from './components/methods/App/Check.js'
import CleanWord from './components/methods/App/CleanWord.js'
import Delete from './components/methods/App/Delete.js'
import FetchWord from './components/methods/App/FetchWord.js'
import Fill from './components/methods/App/Fill.js'
import FillAll from './components/methods/App/FillAll.js'
//import GroupSquares from './methods/App/GroupSquares.js'
import Generate from './components/methods/App/Generate.js'
import GetSuccessors from './components/methods/App/GetSuccessors.js'
import HandleKeyPress from './components/methods/App/HandleKeyPress'
import InputCharacter from './components/methods/App/InputCharacter.js'
import MoveActive from './components/methods/App/MoveActive.js'
import Reset from './components/methods/App/Reset.js'
import ResetAnimation from './components/methods/App/ResetAnimation.js'
import Reveal from './components/methods/App/Reveal.js'
import Select from './components/methods/App/Select.js'
import ValidNeighbour from './components/methods/App/ValidNeighbour.js'
import WordAt from './components/methods/App/WordAt.js'

// node modules
import React from 'react';

// styles
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.AdjustDirection = AdjustDirection.bind(this);
    this.Check = Check.bind(this);
    this.CleanWord = CleanWord.bind(this);
    this.Delete = Delete.bind(this);  
    this.FetchWord = FetchWord.bind(this);
    this.Fill = Fill.bind(this);
    this.FillAll = FillAll.bind(this);
    //this.GroupSquares = GroupSquares.bind(this);
    this.Generate = Generate.bind(this);
    this.GetSuccessors = GetSuccessors.bind(this);
    this.HandleKeyPress = HandleKeyPress.bind(this);
    this.InputCharacter = InputCharacter.bind(this);
    this.MoveActive = MoveActive.bind(this);
    this.Reset = Reset.bind(this);
    this.ResetAnimation = ResetAnimation.bind(this);
    this.Reveal = Reveal.bind(this);
    this.Select = Select.bind(this);
    this.ValidNeighbour = ValidNeighbour.bind(this);
    this.WordAt = WordAt.bind(this);
    document.addEventListener('keydown', this.HandleKeyPress);
    this.state = {
      active: {row: 0, col: 0, num: 1, dir: 'across'},
      fillOrder: fillOrder,
      grid: new GridNode(),
      height: 13,
      loading: true,
      locked: false,
      maxNum: 0,
      score: 0,
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
          />  
    )
  }
  componentDidMount() {
    this.Generate();
  }
}

export default App;
