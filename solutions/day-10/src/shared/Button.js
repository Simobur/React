import React from "react";
import { btnStyle } from "../styles/button-styles";

const Button = ({ text, onClick }) => (
  <button style={btnStyle} onClick={onClick}>
    {text}
  </button>
);

export default Button;
