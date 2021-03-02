import React from "react";

const Game = ({ name, image }) => {
  return (
    <li className="game">
      <h2>{name}</h2>
      <img src={image || ""} alt={name} />
    </li>
  );
};

export default Game;
