import React from "react";
import "./styles.css";

const Links = ({ links }) => {
  return (
    <ul className="sidebar__links">
      {links.map((link) => (
        <li key={link}>{link}</li>
      ))}
    </ul>
  );
};

export default Links;
