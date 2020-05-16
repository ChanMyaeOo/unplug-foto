import React from "react";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import NavLinks from "./NavLinks";
import NavbarButton from "./NavbarButton";
import "./Navbar.css";

const Navbar = () => {
  // Logo text
  const title = "Unplug Foto";
  const subtitle = "Photos for everyone";

  return (
    <div className="navbar">
      <Logo title={title} subtitle={subtitle} />
      <SearchInput text="Search photos for free" inputStyle="nav-input" />
      <NavLinks navLink="Collections" />
      <NavLinks navLink="Explore" />
      <NavLinks navLink="..." />
      <NavbarButton navBtnStyle="submit" text="Submit a photo" />
      <NavbarButton navBtnStyle="login" text="Login" />
      <NavbarButton navBtnStyle="join" text="Join free" />
    </div>
  );
};
export default Navbar;
