import React from 'react';
import ReactDOM from 'react-dom';
import {Layer, Rect, Stage, Group, Arc} from 'react-konva';



class MyRect extends React.Component {
  state = { color: 'green' };

  handleClick = () => {
    // window.Konva is a global variable for Konva framework namespace
    this.setState({
      color: window.Konva.Util.getRandomColor()
    });
  }

  render() {
    return (
      <Arc
        x={350}
        y={350}
        innerRadius={40}
        outerRadius={70}
        fill={this.state.color}
        shadowBlur={5}
        angle={60}
        onClick={this.handleClick}
      />
    );
  }
}

class Wedge extends React.Component {
  state = { color: this.props.color };

  handleClick = () => {
    // window.Konva is a global variable for Konva framework namespace
    this.setState({
      color: window.Konva.Util.getRandomColor()
    });
  }
  render(){
    return(
      <Arc
        x={350}
        y={350}
        innerRadius={75}
        outerRadius={100}
        fill={this.state.color}
        shadowBlur={5}
        angle={this.props.angle}
        onClick={this.handleClick}
      />
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Stage width={700} height={700}>
        <Layer>
          <MyRect />
          <Wedge color={"orange"} distance={10} angle = {60}/>
          <Wedge color={"black"} distance = {20} angle = {50}/>
          <Wedge color={"blue"} angle = {40}/>
          <Wedge color={"red"} angle = {20}/>
          <Wedge color={"pink"} angle = {10}/>

        </Layer>
      </Stage>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
