import React from "react";

const Button = (text, fun, style) => {
  <button onClick={fun} style={style}>
    {text}
  </button>;
};

export default Button;
