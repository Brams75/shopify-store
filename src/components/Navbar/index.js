import React from "react";
import List from "./List";
import Icons from "./Icons";
import "./styles.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="navbar__logo">VinciT</span>
      <List />
      <Icons />
    </div>
  );
};

export default Navbar;
