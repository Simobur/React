import React from "react";
import ReactDOM from "react-dom";
import simonPhoto from "./images/hello-pic.jpg";
import techImg from "./images/frontend_technologies.png";

const author = {
  name: "Simon",
  lastName: "Burek",
  birthYear: 1992,
};

const currYear = 2033;

const tech = ["HTML", "CSS", "JavaScript"];

const Header = () => (
  <header>
    <div className="header-style">
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 2, 2020</small>
    </div>
  </header>
);

const Simon = () => (
  <div className="photo">
    <img className="simon-photo" src={simonPhoto} alt="Simon author"></img>
  </div>
);

// JSX element, main
const Main = () => (
  <main className="main-style">
    <p>Prerequisite to get started react.js:</p>
    <ul>
      {tech.map((el) => (
        <li>{el}</li>
      ))}
    </ul>
    <h2>
      {author.name} {author.lastName} was born in {author.birthYear} and now he
      is {currYear - author.birthYear} years old.
    </h2>
  </main>
);

const Technologies = () => (
  <div className="technologies-img">
    <img src={techImg} alt="CSS, html, JS and React logos" width="100%"></img>
  </div>
);

// JSX element, footer
const Footer = () => (
  <footer className="footer-style">
    <p>Copyright 2020</p>
  </footer>
);

const Subscribe = () => (
  <div className="subscribe">
    <h1>SUBSCRIBE</h1>
    <p>Sing up with your email adress to reciv news and updates</p>
    <form className="sub-form">
      <input placeholder="First Name" type="text"></input>
      <input placeholder="Last Name" type="text"></input>
      <input placeholder="Email Name" type="email"></input>
    </form>
    <button>Subscribe</button>
  </div>
);

const buttonStyle = {
  padding: "10px 20px",
  background: "rgb(0, 255, 0)",
  border: "none",
  borderRadius: "5px",
  margin: "20px 50%",
  transform: "translateX(-50%)",
  cursor: "pointer",
};

const Button = () => <button style={buttonStyle}>Press me!</button>;

// JSX element, app, a container or a parent
const app = (
  <div className="app">
    <Header />
    <Button />
    <Simon />
    <Main />
    <Button />
    <Subscribe />
    <Technologies />
    <Button />
    <Footer />
  </div>
);

const rootElement = document.getElementById("root");

ReactDOM.render(app, rootElement);
