import React from 'react';
import SnakeBody from './SnakeBody';
import Food from './Food';



const getRandomCoord = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2
  let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2

  return [x,y]
}


function App() {


  const state = {
    food: getRandomCoord(),
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
