import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    count: 0,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    url1: "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ",
    url2: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    position: 1,
    marginLeft: "1rem",
  };

  addOne = () => this.setState({ count: this.state.count + 1 });

  removeOne = () => this.setState({ count: this.state.count - 1 });

  changeImg = () =>
    this.setState({
      image:
        this.state.image === this.state.url1
          ? (this.state.image = this.state.url2)
          : (this.state.image = this.state.url1),
    });

  moveRight = () => {
    this.state.position++;
    this.setState({
      marginLeft: `${this.state.position}rem`,
    });
    console.log(this.state.marginLeft);
  };

  moveLeft = () => {
    this.state.position--;
    this.setState({
      marginLeft: `${this.state.position}rem`,
    });
    console.log(this.state.marginLeft);
  };

  render() {
    const count = this.state.count;
    const image = this.state.image;

    return (
      <div>
        <div className="app">
          <h1>{count}</h1>
          <button className="btn btn-remove" onClick={this.removeOne}>
            -
          </button>{" "}
          <button className="btn btn-add" onClick={this.addOne}>
            +
          </button>{" "}
        </div>
        <div>
          <img
            src={image}
            height={"200px"}
            style={{ marginLeft: this.state.marginLeft }}
          />{" "}
        </div>
        <button className="btn" onClick={this.moveLeft}>
          &larr;
        </button>{" "}
        <button className="btn btn-change" onClick={this.changeImg}>
          @
        </button>{" "}
        <button className="btn" onClick={this.moveRight}>
          &rarr;
        </button>
      </div>
    );
  }
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
