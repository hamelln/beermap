import React, { MouseEvent } from "react";
import { useRouter } from "next/navigation";
import S from "./Breweries.module.scss";
import Brewery from "@/types/Brewery";
import {
  saveBreweries,
  saveKeyword,
  saveScrollPosition,
} from "@/utils/search-result-cacher";

interface Props {
  inputText: string;
  breweries: Brewery[];
}

const Breweries = ({ inputText, breweries }: Props) => {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLLIElement>, breweryId: string) => {
    e.preventDefault();
    saveKeyword(inputText);
    saveBreweries(breweries);
    saveScrollPosition(window.scrollY);
    router.push(`/search/${breweryId}`);
  };

  return (
    <section className={S.section}>
      <ul className={S.brewery_list} data-testid="searchResult">
        {breweries.map(
          ({
            id,
            breweryName,
            breweryDescription,
            signatureBeer,
            stateProvince,
            city,
            address1,
          }: Brewery) => {
            const fullAddress = `${stateProvince} ${city} ${address1}`;
            return (
              <li
                className={S.brewery_item}
                key={id}
                onClick={(e) => handleClick(e, id)}
              >
                <div className={S.inner_box}>
                  <div className={S.image_box}>
                    <img src="/test-image.png" alt="가게 이미지"></img>
                  </div>
                  <div className={S.content_box}>
                    <div className={S.brewery_name}>{breweryName}</div>
                    <div className={S.brewery_desc}>{breweryDescription}</div>
                    <div className={S.recommend_box}>
                      <span className={S.recommend_title}>추천 맥주</span>
                      <span className={S.recommend_beer}>
                        {signatureBeer.beerName}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={S.address}>
                  <span>{fullAddress}</span>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
};

export default Breweries;
