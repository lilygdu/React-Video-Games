import React from "react";
import defaultImage from "../images/default.jpg";

const Game = ({ name, image }) => {
  return (
    <li className="game">
      <h2>{name}</h2>
      <img src={image || defaultImage} alt={name} />
    </li>
  );
};

export default Game;
