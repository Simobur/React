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

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      welcome,
      title,
      author: { lastName, firstName },
      date,
    } = this.props.data;

    return (
      <header>
        <div className="header-style">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>
            {firstName} {lastName}
          </h3>
          <p>Asabeneh Yetayeh</p>
          <small>{date.toString()}</small>
        </div>
      </header>
    );
  }
}

// const Header = (props) => {
//   const data = props.data;
//   // console.log(data);
//   // const { welcome, title, author, date } = data;
//   // const { firstName, lastName } = author;

//   const {
//     welcome,
//     title,
//     author: { firstName, lastName },
//     date,
//   } = data;

//   console.log(date);

//   return (
//     <header>
//       <div className="header-style">
//         <h1>{welcome}</h1>
//         <h2>{title}</h2>
//         <h3>
//           {firstName} {author.lastName}
//         </h3>
//         <p>Asabeneh Yetayeh</p>
//         <small>{date.toString()}</small>
//       </div>
//     </header>
//   );
// };

class Simon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="photo">
        <img className="simon-photo" src={simonPhoto} alt="Simon author"></img>
      </div>
    );
  }
}
// const Simon = () => (
//   <div className="photo">
//     <img className="simon-photo" src={simonPhoto} alt="Simon author"></img>
//   </div>
// );

// JSX element, main
class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className="main-style">
        <p>Prerequisite to get started react.js:</p>
        <ul>
          {tech.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
        <h2>
          {author.name} {author.lastName} was born in {author.birthYear} and now
          he is {currYear - author.birthYear} years old.
        </h2>
      </main>
    );
  }
}

class Technologies extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="technologies-img">
        <img
          src={techImg}
          alt="CSS, html, JS and React logos"
          width="100%"
        ></img>
      </div>
    );
  }
}

// const Technologies = () => (
//   <div className="technologies-img">
//     <img src={techImg} alt="CSS, html, JS and React logos" width="100%"></img>
//   </div>
// );

// JSX element, footer

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer className="footer-style">
        <p>Copyright 2020</p>
      </footer>
    );
  }
}

// const Footer = () => (
//   <footer className="footer-style">
//     <p>Copyright 2020</p>
//   </footer>
// );

const Subs = {
  placeholder: "Emails",
  type: "text",
};

class Subscribe extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { message, placeholder1, placeholder2 } = this.props;

    return (
      <div className="subscribe">
        <h1>SUBSCRIBE</h1>
        <p>{message}</p>
        <form className="sub-form">
          <input placeholder={placeholder1} type="text"></input>
          <input placeholder={placeholder2} type="text"></input>
          <input placeholder="Email Name" type="email"></input>
        </form>
        <button>Subscribe</button>
      </div>
    );
  }
}

// const Subscribe = ({ message, placeholder1, placeholder2 }) => {
//   return (
//     <div className="subscribe">
//       <h1>SUBSCRIBE</h1>
//       <p>{message}</p>
//       <form className="sub-form">
//         <input placeholder={placeholder1} type="text"></input>
//         <input placeholder={placeholder2} type="text"></input>
//         <input placeholder="Email Name" type="email"></input>
//       </form>
//       <button>Subscribe</button>
//     </div>
//   );
// };

const buttonStyle = {
  padding: "10px 20px",
  background: "rgb(0, 255, 0)",
  border: "none",
  borderRadius: "5px",
  margin: "20px 50%",
  transform: "translateX(-50%)",
  cursor: "pointer",
};

class Status extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const status = this.props.status
      ? "Old enough to drive a car"
      : "Too young!";
    return <p className="main-style">{status}</p>;
  }
}

// const Status = (props) => {
//   const status = props.status ? "Old enough to drive a car" : "Too young!";
//   return <p className="main-style">{status}</p>;
// };

// const Skills = (props) => {
//   const skillsList = props.skills.map((skill) => <li key={skill}>{skill}</li>);
//   console.log(skillsList);
//   return <ul className="main-style">{skillsList}</ul>;
// };

class Skills extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const skillsFormated = skills.map((skill) => <li key={skill}>{skill}</li>);
    return <ul className="main-style">{skillsFormated}</ul>;
  }
}

const skills = ["HTML", "CSS", "JavaScript"];

const age = 11;
const premmision = age >= 18;

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { action, text } = this.props;
    return (
      <button style={buttonStyle} onClick={action}>
        {text}
      </button>
    );
  }
}

// const Button = (props) => (
//   <button style={buttonStyle} onClick={props.action}>
//     {props.text}
//   </button>
// );

const action = () => alert("Preesed!");
const num = ["ene", "due", "rike", "fake", 5];

const Numbers = ({ array }) => array.map((el) => <li key={el}>{el}</li>);

class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main-style">
        <div>
          <h1>Header of list</h1>
          <ul>
            <Numbers array={num} />
          </ul>
        </div>
      </div>
    );
  }
}

// const List = () => (
//   <div className="main-style">
//     <div>
//       <h1>Header of list</h1>
//       <ul>
//         <Numbers array={num} />
//       </ul>
//     </div>
//   </div>
// );

const arrOfArr = [
  ["HTML", 10],
  ["CSS", 2],
  ["JavaScript", 23],
];

const countriesList = [
  { name: "Poland", city: "Katowice" },
  { name: "Dojchland", city: "Berlin" },
  { name: "Czech Republic", city: "Ostrava" },
];

const Country = ({ list: { name, city } }) => (
  <div>
    <h1>{name}</h1>
    <p>{city}</p>
  </div>
);

const CountryList = ({ countries }) => {
  return (
    <div>
      {countries.map((country) => (
        <Country key={country.name} list={country} />
      ))}
    </div>
  );
};

const SkillList = ({ skill: [tech, lvl] }) => (
  <li key={tech}>
    {tech} {lvl}
  </li>
);

const SkillContainer = ({ array }) => {
  const list = array.map((el) => <SkillList skill={el} />);
  return <ul>{list}</ul>;
};

class GreetHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  greetPeople = () => alert("Welcome this course!");

  render() {
    return (
      <article>
        <div>
          <Button text="Show greeting!" action={this.greetPeople} />
        </div>
      </article>
    );
  }
}

const UserCart = ({ user: { firstName, lastName, image } }) => (
  <div className="user-card">
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
);

const ButtonNew = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);

const buttonStyleNew = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5px,
  margin: 3px,
  cursor: "pointer",
  fontSize: "18",
  color: "white"
}

class NewHeader extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props.data)
    const{}
  }
}

// JSX element, app, a container or a parent
const App = () => (
  <div className="app">
    <GreetHeader />
    <Header data={infos} />
    <CountryList countries={countriesList} />
    <SkillContainer array={arrOfArr} />
    <Status status={false} />
    <Button text="Press Me" action={() => alert("hey!")} />
    <Skills skills={skills} />
    <Simon />
    <Main />
    <List />
    <Button text="Do not touch me!" />
    <Subscribe message="Message me!" placeholder1="Name" placeholder2="Email" />
    <Technologies />
    <Button text="Random message" />
    <Footer />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
