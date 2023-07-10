import React from "react";
import Button from "../../shared/Button";

class Handlers extends React.Component {
  state = {
    firstName: "",
    message: "",
    key: "",
  };

  handleClick = (e) => this.setState({ message: "Welcome in event's day" });

  handleMouseMove = (e) => this.setState({ message: "Mouse is moving" });

  handleChange = (e) =>
    this.setState({ firstName: e.target.value, message: e.target.value });

  handleKeyPressed = (e) =>
    this.setState({
      message:
        `${e.target.value} has been preesed and keykode is ` + e.charCode,
    });

  handleBlur = (e) =>
    this.setState({ message: "Input field has been blurred" });

  handleCopy = (e) => this.setState({ message: "Coping is not allowed!!!" });

  render() {
    return (
      <div>
        <h2>Handlers!</h2>
        <p>Message: {this.state.message}</p>
        <Button text="Click me" onClick={this.handleClick} />
        <Button text="Move mouse on me" onClick={this.handleMouseMove} />
        <p onCopy={this.handleCopy}>Check if you can copy that line of text</p>
        <label htmlFor="">Test for onKeyPress Event:</label>
        <input type="text" onKeyPress={this.handleKeyPressed} />
        <br />
        <label htmlFor="">Test for onBlur Event: </label>
        <input type="text" onBlur={this.handleBlur} />

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              onChange={this.handleChange}
              name="firstName"
              value={this.state.value}
            />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Handlers;
