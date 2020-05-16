import React from "react";
import "./NavbarButton.css";

const NavbarButton = (props) => {
  return <button className={props.navBtnStyle}>{props.text}</button>;
};
export default NavbarButton;
