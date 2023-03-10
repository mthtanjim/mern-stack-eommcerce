import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([]);

  const hadleSubmit = (e) => {
    e.preventDefault();
    try {
      const { data } = axios.get(`/products/search/${keyword}`);
      console.log("search data", data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form className="d-flex" onSubmit={hadleSubmit}>
        <input
          onChange={(e) => setKeyword(e.target.value)}
          type="text"
          placeholder="Search..."
          className="form-control me-2"
        />
        <button className="btn btn-secondary bg-white text-black" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
