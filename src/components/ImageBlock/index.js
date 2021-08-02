import React from "react";
import CircleBlock from "../CircleBlock";
import bottles from "../../assets/bottles.png";
import BuyNow from "./BuyNow";
import "./styles.css";

const ImageBlock = () => {
  return (
    <div className="imageBlock">
      <img src={bottles} alt="bottles" height="650" width="650" />
      <BuyNow />
      <CircleBlock />
      <h3 className="imageBlock__title">VinciT - Lemon Malt</h3>
      <p className="imageBlock__text">
        Contrary to popular belief, Lorem ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old.
      </p>
    </div>
  );
};

export default ImageBlock;
