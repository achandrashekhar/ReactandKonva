import React from 'react';
import ReactDOM from 'react-dom';
import {Layer, Rect, Stage, Group, Arc} from 'react-konva';
// var React = require('react');




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
        innerRadius={70}
        outerRadius={100}
        fill={this.state.color}
        shadowBlur={5}
        angle={360}
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
        innerRadius={this.props.innerRadius} //110
        outerRadius={this.props.outerRadius} //200
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
          <Wedge color={"orange"} angle = {120} innerRadius={110} outerRadius={200}/>
          <Wedge color={"red"} angle = {80} innerRadius={110} outerRadius={200}/>
          <Wedge color={"blue"} angle = {40} innerRadius={110} outerRadius={200}/>
            <Wedge color={"green"} angle = {40} innerRadius={110} outerRadius={115}/>
          <Wedge color={"yellow"} angle = {30} innerRadius={110} outerRadius={115}/>
          <Wedge color={"red"} angle = {20} innerRadius={110} outerRadius={115}/>
          <Wedge color={"black"} angle = {10} innerRadius={110} outerRadius={115}/>
          <Wedge color={"black"} angle = {360} innerRadius={200} outerRadius={220}/>

        </Layer>
      </Stage>
    );
  }


}

ReactDOM.render(<App />, document.getElementById('root'));
