import React from "react";
import ReactDOM from "react-dom";
import Game from "./components/Game";
import Form from "./components/Form";

const App = () => {
  const [games, setGames] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isMoreLoading, setIsMoreLoading] = React.useState(false);
  const [nextPage, setNextPage] = React.useState(null);

  React.useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    setIsLoading(true);

    const response = await fetch(
      `https://api.rawg.io/api/games?search=${searchTerm}`
    );
    const data = await response.json();

    setNextPage(data.next);
    setGames(data.results);
    setIsLoading(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchGames();
  };

  const fetchMore = async () => {
    setIsMoreLoading(true);
    if (nextPage && !isMoreLoading) {
      const response = await fetch(nextPage);
      const data = await response.json();
      setGames([...games, ...data.results]);
      setNextPage(data.next);
    }
    setIsMoreLoading(false);
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
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          games.map((game) => (
            <Game
              key={game.id}
              name={game.name}
              image={game.background_image}
            />
          ))
        )}
      </ul>
      {nextPage && <button onClick={fetchMore}>More</button>}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
