import React from "react";
import IBrewery from "@/types/Brewery";
import S from "./brewery.module.scss";
import BreweriesApi from "@/services/BreweriesApi";
import Notfound from "./not-found";
import Carousel from "@/app/search/carousel/Carousel";

interface Props {
  params: { id: string };
}

export default async function Brewery({ params }: Props) {
  const breweriesApi = new BreweriesApi();
  const id = params.id;
  const breweryInfo: IBrewery | null = await breweriesApi.fetchBreweryById(id);
  if (!breweryInfo) return <Notfound />;
  const { name, beer_description } = breweryInfo.signature_beer;
  const phoneNumber = breweryInfo.phone.replaceAll("-", "");

  return (
    <article className={S.main}>
      <Carousel />
      <header className={S.title_header}>
        <h2 className={S.title}>{breweryInfo.name}</h2>
        <button className={S.like_box}>
          <img
            className={S.like_icon}
            src="/images/icons/love.png"
            alt="Like icon"
          />
        </button>
      </header>
      <section className={S.info_section}>
        <address className={S.address_box}>
          <img
            className={S.address_image}
            src="/images/icons/location.png"
            alt="Address icon"
          />
          <span>
            {breweryInfo.state_province} {breweryInfo.city}
            {breweryInfo.address_1}
          </span>
          <button className={S.copy_address_button}>
            <img src="/images/icons/copy.png"></img>
          </button>
        </address>
        <div className={S.office_hours_box}>
          <img
            className={S.office_hours_image}
            src="/images/icons/clock.png"
            alt="Clock icon"
          />
          <time className={S.todays_office_hours}>12:00 - 23:00</time>
          <time className={S.todays_break_time}>16:00 - 17:00</time>
          <button className={S.other_office_hours}>+</button>
        </div>
        <div className={S.phone_box}>
          <img
            className={S.phone_image}
            src="/images/icons/phone.png"
            alt="Phone icon"
          />
          <a href={`tel:${phoneNumber}`} className={S.phone_number}>
            {breweryInfo.phone}
          </a>
        </div>
        <div className={S.site_box}>
          <img
            className={S.site_image}
            src="/images/icons/link.png"
            alt="Website icon"
          />
          <a href={breweryInfo.website_url} className={S.site_url}>
            {breweryInfo.website_url}
          </a>
        </div>
      </section>
      <div className={S.cutline}></div>
      <section className={S.description_section}>
        <p>{breweryInfo.brewery_description}</p>
      </section>
      <div className={S.cutline}></div>
      <section className={S.recommend_section}>
        <div className={S.beer_figure}>
          <div className={S.beer_title_box}>
            <img
              className={S.beer_icon}
              src="/images/icons/beer.png"
              alt="Beer icon"
            />
            <span className={S.beer_recommendation}>추천 맥주</span>
          </div>
          <h3 className={S.beer_name}>{name}</h3>
          <p>{beer_description}</p>
        </div>
      </section>
    </article>
  );
}
