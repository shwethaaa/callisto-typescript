import React from "react";
import "./Button.css";

interface buttonProps {
  variant: string;
  children: any;
}

function Button(props: buttonProps) {
  const { variant = "primary", children, ...rest } = props;
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
