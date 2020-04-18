import React, { useEffect, useState } from 'react';
import SnakeBody from './SnakeBody';
import Food from './Food';



const getRandomCoord = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2
  let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2

  return [x,y]
}

// edit

function App() {


  const state = {
    food: getRandomCoord(),
    direction: 'RIGHT',
    body: [
      [0,0],
      [2,0]
    ]
  }

  const [snek, setSnek] = useState(state)
  const [pressed, setPressed] = useState(snek.direction)

  // console.log(snek.direction)

  // useEffect(() => {
  //   document.onkeydown = onKey;
  // }, []);

  const onKey = (arg) => {

    let match = event
    
  }

  return (
    <div className="game-area">
      <SnakeBody snakeBod={snek.body} />
      <Food dot={snek.food}/>
    </div>
  );
}

export default App;
