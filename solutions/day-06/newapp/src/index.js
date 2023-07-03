import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const root = document.getElementById("root");
// const number = 10;
const greenStyle = { backgroundColor: "rgb(48, 140, 45)" };
const redStyle = { backgroundColor: "rgb(212, 58, 58)" };
const yellowStyle = { backgroundColor: "rgb(226, 226, 59)" };

const arr = [];

const SquareCreate = (n) => {
  console.log(n);
  // console.log(n);
  if (n % 2 === 0) {
    arr.push(
      <h2 className="day" style={greenStyle} key={n}>
        {n}
      </h2>
    );
  }
  if (n % 2 === 1) {
    arr.push(
      <h2 className="day" style={yellowStyle} key={n}>
        {n}
      </h2>
    );
  }
};

const RandomColor = (n) => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }

  const backgroundColor = {
    backgroundColor: `#${color}`,
  };

  arr.push(
    <h2 className="day" style={backgroundColor} key={n}>
      {color}
    </h2>
  );
};

const SquareCount = ({ numDays }) => {
  for (let i = 0; i <= numDays; i++) {
    // SquareCreate(i);
    RandomColor(i);
  }
  return (
    <div>
      <div className="header">
        <h1>React of 30 days</h1>
        <p>Number Generator</p>
      </div>
      <div className="days">{arr}</div>
    </div>
  );
};

const tenHighestPopulation = [
  { country: "World", population: 7693165599 },
  { country: "China", population: 1377422166 },
  { country: "India", population: 1295210000 },
  { country: "United States of America", population: 323947000 },
  { country: "Indonesia", population: 258705000 },
  { country: "Brazil", population: 206135893 },
  { country: "Pakistan", population: 194125062 },
  { country: "Nigeria", population: 186988000 },
  { country: "Bangladesh", population: 161006790 },
  { country: "Russian Federation", population: 146599183 },
  { country: "Japan", population: 126960000 },
];

const Population = ({ country, population }, max) => {
  const procentage = (population / max) * 100;
  const style = {
    width: `${procentage}%`,
  };

  return (
    <div className="population">
      <h3 className="city">{country}</h3>
      <div className="bar">
        <div className="color" style={style}></div>
      </div>
      <h3 className="number">{population}</h3>
    </div>
  );
};

const RenderPopulation = ({ popul }) => {
  let maxPopulation = 0;

  return (
    <div>
      <div className="header">
        <h1>React population list</h1>
        <p>World population</p>
      </div>
      <div className="header">
        {popul.map((el) => {
          if (el.population > maxPopulation) maxPopulation = el.population;
          return Population(el, maxPopulation);
        })}
      </div>
    </div>
  );
};
const App = () => (
  <div>
    <SquareCount numDays={31} />
    <RenderPopulation popul={tenHighestPopulation} />
  </div>
);

ReactDOM.render(<App />, root);
