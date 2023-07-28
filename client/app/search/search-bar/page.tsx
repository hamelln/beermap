"use client";

import React, { useState, ChangeEvent } from "react";
import styles from "./searchBar.module.scss";

interface Props {
  inputValue: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ inputValue, handleChange }: Props) => {
  return (
    <div className={styles.search_bar_container}>
      <span className={styles.search_bar_icon}>&#128269;</span>
      <input
        className={styles.search_bar_input}
        type="text"
        placeholder="지역이나 가게 이름을 입력해보세요"
        value={inputValue}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default SearchBar;