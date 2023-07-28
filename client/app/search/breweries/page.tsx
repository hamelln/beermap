import React, { useEffect, useState } from "react";
import BreweriesApi from "@/services/BreweriesApi";
import Brewery from "@/types/Brewery";
import styles from "./breweries.module.scss";

interface Props {
  inputValue: string;
}

const Breweries = ({ inputValue }: Props) => {
  const [breweriesList, setBreweriesList] = useState<Brewery[]>([]);
  const breweriesApi = new BreweriesApi();

  const handleBreweriesList = async () => {
    if (!inputValue) setBreweriesList([]);
    else {
      const newBreweries = await breweriesApi.fetchBreweriesByInputValue(
        inputValue
      );
      setBreweriesList(newBreweries);
    }
  };

  useEffect(() => {
    handleBreweriesList();
  }, [inputValue]);

  return (
    <section className={styles.section}>
      <ul className={styles.brewery_list} data-testid="searchResult">
        {breweriesList.map((brewery: Brewery) => (
          <li className={styles.brewery_item} key={brewery.id}>
            <div className={styles.inner_box}>
              <div className={styles.image_box}>
                <img src="/test-image.png" alt="가게 이미지"></img>
              </div>
              <div className={styles.content_box}>
                <div className={styles.brewery_name}>{brewery.name}</div>
                <div className={styles.brewery_desc}>브루어리 소개문</div>
                <div className={styles.recommend_box}>
                  <span className={styles.recommend_title}>추천 맥주</span>
                  <span className={styles.recommend_beer}>미노리 세션</span>
                </div>
              </div>
            </div>
            <div className={styles.address}>
              <span>{brewery.address_1}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Breweries;
