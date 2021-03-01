import React from "react";
import "./Input.css";

interface inputProps {
  size: string;
  placeholder: string;
}

function Input(props: inputProps) {
  const { size = "small", ...rest } = props;
  return <input className={`input ${size} `} {...rest}></input>;
}

export default Input;
