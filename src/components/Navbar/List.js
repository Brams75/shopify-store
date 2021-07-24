import React from "react";

const items = ["flavors", "store", "blog", "about us"];

const List = () => {
  return (
    <ul className="navbar__list">
      {items.map((item) => (
        <li key={item} className="list__item">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
