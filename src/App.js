import React from 'react';
import SnakeBody from './SnakeBody'

function App() {


  state = {
    body: [
      [0,0],
      [2,0]
    ]
  }


  return (
    <div className="game-area">
      <SnakeBody snakeBod={this.state.body} />
    </div>
  );
}

export default App;
