import React from "react";
import ReactDOM from "react-dom";
import Game from "./components/Game";
import Form from "./components/Form";
// import Search from "./components/Search";
// import Button from "./components/Button";

const App = () => {
  const [games, setGames] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  React.useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    const response = await fetch(
      `https://api.rawg.io/api/games?search=${searchTerm}`
    );

    const data = await response.json();

    setGames(data.results);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchGames();
  };

  return (
    <div>
      <header>
        <h1>🎮 I'd Rather Be Playing 🕹</h1>
      </header>
      <Form
        handleSubmit={handleSubmit}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <ul id="games">
        {games.map((game) => (
          <Game key={game.id} name={game.name} image={game.background_image} />
        ))}
      </ul>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
