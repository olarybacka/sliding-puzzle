import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="a" id={this.props.dimension}>
          <div className="tile">aaaaa</div>
          a {this.props.dimension} {this.props.size} 
          <Board {...this.props}/>
        </div>
      </div>
    )
  }
}

export default App;
