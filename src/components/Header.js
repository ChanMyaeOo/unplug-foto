import React from "react";
import "./Header.css";
import SearchInput from "./SearchInput";

const Header = (props) => {
  return (
    <div className="header">
      <h1>Unplug Foto</h1>
      <h3>Search photos from all around the world</h3>
      <p>Inspired by various photographers</p>
      <SearchInput
        text="Search high resolution photos for free"
        inputStyle="header-input"
        onSubmit={props.onSubmit}
      />
    </div>
  );
};
export default Header;
