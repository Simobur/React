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

const infos = {
  welcome: "Hiho!",
  title: "Title of Hiho!",
  author: {
    firstName: "Simon",
    lastName: "Burek",
  },
  date: new Date(),
};

const Header = (props) => {
  const data = props.data;
  // console.log(data);
  // const { welcome, title, author, date } = data;
  // const { firstName, lastName } = author;

  const {
    welcome,
    title,
    author: { firstName, lastName },
    date,
  } = data;

  console.log(date);

  return (
    <header>
      <div className="header-style">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>
          {firstName} {author.lastName}
        </h3>
        <p>Asabeneh Yetayeh</p>
        <small>{date.toString()}</small>
      </div>
    </header>
  );
};

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
        <li key={el}>{el}</li>
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

const Subscribe = (props) => {
  console.log(props);
  return (
    <div className="subscribe">
      <h1>SUBSCRIBE</h1>
      <p>{props.message}</p>
      <form className="sub-form">
        <input placeholder={props.placeholder1} type="text"></input>
        <input placeholder={props.placeholder2} type="text"></input>
        <input placeholder="Email Name" type="email"></input>
      </form>
      <button>Subscribe</button>
    </div>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  background: "rgb(0, 255, 0)",
  border: "none",
  borderRadius: "5px",
  margin: "20px 50%",
  transform: "translateX(-50%)",
  cursor: "pointer",
};

const Status = (props) => {
  const status = props.status ? "Old enough to drive a car" : "Too young!";
  return <p className="main-style">{status}</p>;
};

const Skills = (props) => {
  const skillsList = props.skills.map((skill) => <li key={skill}>{skill}</li>);
  console.log(skillsList);
  return <ul className="main-style">{skillsList}</ul>;
};

const skills = ["HTML", "CSS", "JavaScript"];

const age = 11;
const premmision = age >= 18;

const Button = (props) => (
  <button style={buttonStyle} onClick={props.action}>
    {props.text}
  </button>
);

const action = () => alert("Preesed!");

const message = "Sing up with your email adress to reciv news and updates";
const placeholder1 = "First Name";
const placeholder2 = "Last Name";

// JSX element, app, a container or a parent
const App = () => (
  <div className="app">
    <Header data={infos} />
    <Status status={false} />
    <Button text="Press Me" action={() => alert("hey!")} />
    <Skills skills={skills} />
    <Simon />
    <Main />
    <Button />
    <Subscribe
      message={message}
      placeholder1={placeholder1}
      placeholder2={placeholder2}
    />
    <Technologies />
    <Button />
    <Footer />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
