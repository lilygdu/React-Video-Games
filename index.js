import React from "react";
import ReactDOM from "react-dom";
import Games from "./components/Games";
import Search from "./components/Search";
import Submit from "./components/Submit";

const App = () => {
  const [game, setGame] = React.useState("")

  React.useEffect(() => {
    fetchGame();
  }), []);

  const fetchGame = async () => {
    const response = await fetch('')
  }

}

  
    // <header>
    //   <h1>🎮 I'd Rather Be Playing 🕹</h1>
    // </header>
    // <main>
    //   <form>
    //     <label for="search">Search</label>
    //     <input id="search" name="search" autocomplete="off" />
    //     <button type="submit">Submit</button>
    //   </form>
    //   <ul id="games"></ul>
    //   <button class="hidden" id="more">More</button>




ReactDOM.render(<App />, document.querySelector("#root"));