import React from "react";
import "./style.css";
const SearchBar = ({ value, handleSearchKey, clearSearch, formSubmit }) => {
  return (
    <div className="searchbar-wrap">
      <form onSubmit={formSubmit}>
        <input
          type="text"
          onChange={handleSearchKey}
          placeholder="Search By Category"
          value={value}
        />
        {value && (
          <span onClick={clearSearch}>
            <b>X</b>
          </span>
        )}
        <button>Go</button>
      </form>
    </div>
  );
};

export default SearchBar;
