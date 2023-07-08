import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { fireEvent } from "@testing-library/react";

class Animals extends React.Component {
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
      <div className="main">
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
            alt={image}
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

class Header extends React.Component {
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
    } = this.props.data;

    return (
      <header>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <p>Select Country for your Holidays!</p>
        </div>
      </header>
    );
  }
}

const BtnLogin = ({ text, action, className }) => (
  <button onClick={action} className={className}>
    {text}
  </button>
);

class App extends React.Component {
  state = {
    loggedIn: false,
  };

  changeLogin = () => {
    this.setState({ loggedIn: !this.state.loggedIn });
  };

  render() {
    const data = {
      welcome: "Welcome Hiho!",
      title: "Title",
      subtitle: "and Subtitle",
      author: {
        firstName: "Simon",
        lastName: "Burek",
      },
    };

    const Welcome = (props) => (
      <div>
        <h3>Welcome!</h3>
      </div>
    );

    let status = this.state.loggedIn ? <Welcome /> : <h3>Please login</h3>;
    let text = this.state.loggedIn ? "Logout" : "Login";

    // if (this.state.loggedIn) {
    //   status = <h3>Welcome to REact Site!</h3>;
    //   text = "Logout";
    // } else {
    //   status = <h3>Please login</h3>;
    //   text = "Login";
    // }

    return (
      <div>
        <Animals />
        <Header data={data} />
        {status}
        <BtnLogin className="btn" text={text} action={this.changeLogin} />
      </div>
    );
  }
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
