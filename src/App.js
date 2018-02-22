import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Board from './containers/Board'

const players = [
  { id: 1, name: 'Billy', score: 7 },
  { id: 2, name: 'Safidy', score: 6 },
  { id: 3, name: 'Iuliia', score: 3 },
  { id: 4, name: 'Oksana', score: 4 },
  { id: 5, name: 'Friedrich', score: 5 },
  { id: 6, name: 'Sia', score: 3 }
]


class App extends Component {

  render() {
    return (
      <div className="App">
          <Board players={players} />
      </div>
    );
  }
}

export default App
