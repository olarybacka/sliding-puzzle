import React, { Component } from 'react';
import './App.css';
import Board from './containers/board'

class App extends Component {
  render() {
        console.log(this.props)
    return (
      <div className="App">
        <Board {...this.props} />
      </div>
    )
  }
}

export default App;
