import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Button = ({ text, action, style }) => (
  <button onClick={action} style={style}>
    {text}
  </button>
);
const btnStyle = {
  backgroundColor: "blue",
  padding: "1rem",
  borderRadius: "15px",
  border: "none",
};

class Header extends React.Component {
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
      style,
    } = this.props.data;

    return (
      <header>
        <div className="header" style={style}>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h2>{subtitle}</h2>
          <p>
            {firstName}
            {lastName}
          </p>
          <small>{date}</small>
          <p>Select country for next Holliday</p>
        </div>
      </header>
    );
  }
}

class App extends React.Component {
  state = {
    loggedIn: false,
    color: "",
    loading: false,
    loadMessage: "Content is Loading!",
  };

  handleLogin = () => {
    this.setState({ loggedIn: !this.state.loggedIn });
  };

  render() {
    const infos = {
      welcome: "Hiho!",
      title: "This is main title!",
      subtitle: "Some subtitle",
      author: { firstName: "Szymon", lastName: "Burek" },
      date: "07.06.2023r",
      style: {
        margin: "2rem",
        backgroundColor: this.state.color,
      },
    };

    let background;
    let date = new Date().getMonth();
    // let date = 11;

    if (date <= 3) {
      infos.style.backgroundColor = "red";
    }
    if (date > 3 && date <= 6) {
      infos.style.backgroundColor = "green";
    }
    if (date > 6 && date <= 9) {
      infos.style.backgroundColor = "blue";
    }
    if (date > 9 && date <= 12) {
      infos.style.backgroundColor = "orangered";
    }

    let status;
    let text;

    // this.setColor(4);
    // if (this.state.loggedIn) {
    //   status = <h3>Welcome in react App</h3>;
    //   text = "Logout";
    //   this.state.color = "red";
    // } else {
    //   status = <h3>Please login!</h3>;
    //   text = "Log In";

    //   this.state.color = "blue";
    // }

    if (!this.state.loading) {
      setTimeout(() => {
        this.state.loadMessage = "Content, loaded!";
        this.setState({ loading: true });
      }, 2000);
    }

    if (!this.state.loggedIn) {
      status = <h3>Welcome in react App</h3>;
      text = "Logout";
      // this.state.color = "orange";
      // background = "orangered";
    } else {
      status = <h3>Please login!</h3>;
      text = "Log In";

      this.state.color = "blue";
    }

    return (
      <div className="app">
        <Header data={infos} />
        {this.state.loadMessage}
        {status}
        <Button text={text} action={this.handleLogin} style={btnStyle} />
      </div>
    );
  }
}

// const Button = ({ text, action }) => (
//   <button onClick={action} className="btn">
//     {text}
//   </button>
// );

// const Time = () => {
//   const year = new Date().getDay();
//   return (
//     <div>
//       <h2>Year: {year}</h2>
//     </div>
//   );
// };

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   state = {
//     season: "Spring",
//     color: "orange",
//   };

//   changeColor = (season) => {
//     if (season <= 2 || (season = 12)) {
//       this.setState({ color: "blue" });
//     }
//   };

//   timer = () => {
//     return <small>{new Date()}</small>;
//   };

//   render() {
//     const date = new Date().getMonth();
//     console.log(date);
//     console.log(this.state.color);
//     return (
//       <div style={{ backgroundColor: this.state.color }}>
//         <h1>Hiho!</h1>
//         <Button text={this.state.color} action={this.changeColor} />
//         <Time />
//       </div>
//     );
//   }
// }

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
