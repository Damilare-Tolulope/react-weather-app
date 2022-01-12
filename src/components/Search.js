import React, { useState } from "react";

const Search = ({ searchText }) => {
  const [text, setText] = useState("");

  const handleText = (e) => {
    e.preventDefault();
    if (!text) return;
    searchText(text);
    setText("");
  };

  return (
    <form style={{ paddingTop: "20px" }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter location"
      />
      <button onClick={handleText}>Search</button>
    </form>
  );
};

export default Search;
