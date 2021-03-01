import React from "react";

const Game = ({ name, image }) => {
  <div className="game">
    <h2>{name}</h2>
    <img src={image} alt={name} />
  </div>;
};
export default Game;
