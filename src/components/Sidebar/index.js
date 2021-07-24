import React from "react";
import "./styles.css";
import Links from "../Links";

const links1 = ["team", "packaging", "manufacturing"];
const socialMedia = ["in", "pi", "fb"];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Links links={links1} />
      <Links links={socialMedia} />
    </div>
  );
};

export default Sidebar;
