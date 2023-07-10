import React from "react";
import { box, text } from "../../styles/clicker-styles";

class Clicker extends React.Component {
  state = {
    x: "",
    y: "",
  };

  randomize = (e) => {
    this.state.x = `${(Math.floor(Math.random() * 10) + 1) * 10}%`;
    this.setState({ y: `${(Math.floor(Math.random() * 10) + 1) * 10}%` });
    console.log(this.state.x, this.state.y);
  };

  render() {
    const position = {
      top: this.state.x,
      left: this.state.y,
      position: "absolute",
    };
    return (
      <div style={box} onClick={this.randomize}>
        <h4 style={position}>CLICK</h4>
      </div>
    );
  }
}

export default Clicker;
