import React from "react";

const SearchForm = ({handleFormSubmit, handleOnChange, value}) => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search"><i>Find a Book</i>:</label>
        <input
          onChange={handleOnChange}
          value={value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Enter book title here..."
          id="search"
        />
        <br />
        <button onClick={handleFormSubmit} className="searchBtn btn btn-primary" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;