import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { v4 as uuid_v4 } from "uuid";

const icons = [<SearchIcon />, <ShoppingCartIcon />, <PersonOutlineIcon />];

const Icons = () => {
  return (
    <ul className="navbar__icons">
      {icons.map((icon) => (
        <li key={uuid_v4()}>{icon}</li>
      ))}
    </ul>
  );
};

export default Icons;
