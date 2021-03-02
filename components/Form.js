import React from "react";

const Form = ({ handleSubmit, searchTerm, setSearchTerm }) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="search">Search</label>
    <input
      id="search"
      name="search"
      autoComplete="off"
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
    />
    <button type="submit">Submit</button>
  </form>
);

export default Form;
