import React, { ChangeEvent, useState } from "react";
import SearchBar from "./search-bar/page";
import Breweries from "./breweries/page";

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
