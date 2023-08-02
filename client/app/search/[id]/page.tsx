import React from "react";
import Brewery from "@/types/Brewery";
import BreweriesApi from "@/services/BreweriesApi";
import Notfound from "./not-found";
import Carousel from "@/app/search/[id]/carousel/Carousel";
import StarButton from "./star/StarButton";
import S from "./BreweryDetails.module.scss";
import Contact from "./contact/Contact";
import BottomSheet from "./map/BottomSheet";

interface Props {
  params: { id: string };
}

export default async function BreweryDetails({ params }: Props) {
  const breweriesApi = new BreweriesApi();
  const id = params.id;
  const breweryInfo: Brewery | null = await breweriesApi.fetchBreweryById(id);
  if (!breweryInfo) return <Notfound />;
  const {
    breweryName,
    breweryDescription,
    stateProvince,
    city,
    address1,
    phone,
    websiteUrl,
  } = breweryInfo;
  const { beerName, beerDescription } = breweryInfo.signatureBeer;
  const images = ["/brewery-image.png", "/brewery-image.png"];

  return (
    <article className={S.main}>
      <Carousel images={images} />
      <header className={S.title_header}>
        <h2 className={S.title}>{breweryName}</h2>
        <StarButton />
      </header>
      <Contact
        stateProvince={stateProvince}
        city={city}
        address1={address1}
        phone={phone}
        websiteUrl={websiteUrl}
      />
      <div className={S.cutline}></div>
      <section className={S.description_section}>
        <p>{breweryDescription}</p>
      </section>
      <div className={S.cutline}></div>
      <section className={S.recommend_section}>
        <div className={S.beer_figure}>
          <div className={S.beer_title_box}>
            <img
              className={S.beer_icon}
              src="/images/icons/beer.svg"
              alt="Beer icon"
            />
            <span className={S.beer_recommendation}>추천 맥주</span>
          </div>
          <h3 className={S.beer_name}>{beerName}</h3>
          <p>{beerDescription}</p>
        </div>
      </section>
      <BottomSheet />
    </article>
  );
}
