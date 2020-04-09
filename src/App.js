import React from 'react';
import SnakeBody from './SnakeBody';
import Food from './Food';

function App() {


  const state = {
    food: [6,8],
    body: [
      [0,0],
      [2,0]
    ]
  }


  return (
    <div className="game-area">
      <SnakeBody snakeBod={state.body} />
      <Food dot={state.food}/>
    </div>
  );
}

export default App;
