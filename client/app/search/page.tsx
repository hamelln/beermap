"use client";

import React, { ChangeEvent, useEffect, useState, useTransition } from "react";
import SearchBar from "./search-bar/SearchBar";
import Breweries from "./breweries/Breweries";
import BreweriesApi from "@/services/BreweriesApi";
import Brewery from "@/types/Brewery";
import {
  loadBreweries,
  loadKeyword,
  loadScrollPosition,
} from "@/utils/search-result-cacher";

const Search = () => {
  const [inputText, setInputText] = useState<string>(loadKeyword());
  const [breweries, setbreweries] = useState<Brewery[]>(loadBreweries());
  const [isPending, startTransition] = useTransition();
  const breweriesApi = new BreweriesApi();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handlebreweries = async () => {
    if (!inputText) setbreweries([]);
    else {
      const newBreweries = await breweriesApi.fetchBreweriesByInputText(
        inputText
      );
      setbreweries(newBreweries);
    }
  };

  useEffect(() => {
    const scrollY = loadScrollPosition();
    scrollTo(0, scrollY);
  }, []);

  useEffect(() => {
    startTransition(() => {
      handlebreweries();
    });
  }, [inputText]);

  return (
    <>
      <SearchBar inputText={inputText} handleChange={handleChange} />
      <Breweries inputText={inputText} breweries={breweries} />
    </>
  );
};

export default Search;
