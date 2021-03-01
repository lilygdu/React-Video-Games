import React from "react";

const Search = ({ fetchGame }) => {
  <input
    type="text"
    value=""
    onChange={(event) => fetchGame(event.target.value)}
  >
    Search for your fav game here
  </input>;
};

export default Search;
