import React from "react";
import ReactDOM from "react-dom";
import Game from "./components/Game";
import Search from "./components/Search";
import Button from "./components/Button";

const App = () => {
  const [game, setGame] = React.useState("");
  // const searchTerm =

  React.useEffect(() => {
    fetchGame();
  }, []);

  const fetchGame = async () => {
    const response = await fetch("https://api.rawg.io/api/games?search=${}", {
      header: { Accept: "application/json" },
    });

    const data = await response.json();
    console.log(data);
    setGame(data.game);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchGame();
  };

  return (
    <div>
      <header>
        <h1>🎮 I'd Rather Be Playing 🕹</h1>
      </header>
      <Search onChange={fetchGame} />
      <Button handleClick={fetchGame} />
      <div>
        <ul>
          <li>
            <Game name={name} image={image} />
          </li>
        </ul>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
