import React from "react";
import ReactDOM from "react-dom";
import Game from "./components/Game";
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search</label>
        <input
          id="search"
          name="search"
          autocomplete="off"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul id="games">
        {games.length > 0 && (
          <Game name={games[0].name} image={games[0].background_image} />
        )}
      </ul>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
