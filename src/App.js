import React, { Component } from 'react';
import SnakeBody from './SnakeBody';
import Food from './Food';



const getRandomCoord = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2
  let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2

  return [x,y]
}

const initState = {
  food: getRandomCoord(),
  speed: 200,
  direction: 'RIGHT',
  body: [
    [0,0],
    [2,0]
  ]
}

class App extends Component{

  state = initState

  componentDidMount(){
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.onKeyDown;
  }


  componentDidUpdate(){
    this.outOfBounds()
  }


  onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        this.setState({direction: 'UP'});
        break;
      case 40:
        this.setState({direction: 'DOWN'});
        break;
      case 37:
        this.setState({direction: 'LEFT'});
        break;
      case 39:
        this.setState({direction: 'RIGHT'});
        break;
    }
  }


  moveSnake = () => {
    let dots = [...this.state.body]
    let head = dots[dots.length -1]

    switch (this.state.direction) {
      case 'RIGHT':
        head = [head[0] + 2, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - 2, head[1]];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 2];
        break;
      case 'UP':
        head = [head[0], head[1] - 2];
        break;
    }
    dots.push(head);
    dots.shift();
    this.setState({
      body: dots
    })
  }


  outOfBounds() {
    let head = this.state.body[this.state.body.length -1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0){
      this.onGameOver()
    }
  }


  onGameOver(){
    alert(`Game Over... Your score is, ${this.state.body.length - 2}`);
    this.setState(initState)
  }










  render(){
    return (
      <div className="game-area">
        <SnakeBody snakeBod={this.state.body} />
        <Food dot={this.state.food}/>
      </div>
    );
  }
}

export default App;
