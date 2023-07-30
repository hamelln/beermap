import React, { MouseEvent, useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import BreweriesApi from "@/services/BreweriesApi";
import styles from "./breweries.module.scss";
import IBrewery from "@/types/Brewery";

interface Props {
  inputValue: string;
}

const Breweries = ({ inputValue }: Props) => {
  const [breweriesList, setBreweriesList] = useState<IBrewery[]>([]);
  const [isPending, startTransition] = useTransition();
  const breweriesApi = new BreweriesApi();
  const router = useRouter();
  const handleBreweriesList = async () => {
    if (!inputValue) setBreweriesList([]);
    else {
      const newBreweries = await breweriesApi.fetchBreweriesByInputValue(
        inputValue
      );
      setBreweriesList(newBreweries);
    }
  };

  const handleClick = (e: MouseEvent<HTMLLIElement>, breweryId: string) => {
    e.preventDefault();
    router.push(`/search/${breweryId}`);
  };

  useEffect(() => {
    startTransition(() => {
      handleBreweriesList();
    });
  }, [inputValue]);

  return (
    <section className={styles.section}>
      <ul className={styles.brewery_list} data-testid="searchResult">
        {breweriesList.map((brewery: IBrewery) => (
          <li
            className={styles.brewery_item}
            key={brewery.id}
            onClick={(e) => handleClick(e, brewery.id)}
          >
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
