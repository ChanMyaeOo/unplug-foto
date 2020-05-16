import React from "react";

const Logo = (props) => {
  return (
    <div>
      <span>{props.title}</span>
      <br />
      <span>{props.subtitle}</span>
    </div>
  );
};
export default Logo;
