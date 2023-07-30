"use client";

import React, { ChangeEvent, useState } from "react";
import Breweries from "./breweries/breweries";
import SearchBar from "./search-bar/searchBar";

const Search = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <SearchBar inputValue={inputValue} handleChange={handleChange} />
      <Breweries inputValue={inputValue} />
    </>
  );
};

export default Search;
