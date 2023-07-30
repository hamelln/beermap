import React from "react";
import IBrewery from "@/types/Brewery";
import BreweriesApi from "@/services/BreweriesApi";
import Notfound from "./not-found";
import S from "./brewery.module.scss";
import Carousel from "@/app/search/carousel/Carousel";

interface Props {
  params: { id: string };
}

export default async function Brewery({ params }: Props) {
  const breweriesApi = new BreweriesApi();
  const id = params.id;
  const breweryInfo: IBrewery | null = await breweriesApi.fetchBreweryById(id);
  if (!breweryInfo) return <Notfound />;

  return (
    <article className={S.main}>
      <Carousel />
      <header className={S.title_header}>
        <h2 className={S.title}>{breweryInfo.name}</h2>
        <button className={S.like_box}>
          <img className={S.like_icon} alt="Like icon" />
        </button>
      </header>
      <section className={S.info_section}>
        <address className={S.address_box}>
          <img className={S.address_image} alt="Address icon" />
          <span>{breweryInfo.address_1}</span>
          <button className={S.copy_address_button}>주소 복사</button>
        </address>
        <div className={S.office_hours_box}>
          <img className={S.office_hours_image} alt="Clock icon" />
          <time className={S.todays_office_hours}>12:00 - 23:00</time>
          <time className={S.todays_break_time}>16:00 - 17:00</time>
          <button className={S.other_office_hours}></button>
        </div>
        <div className={S.phone_box}>
          <img className={S.phone_image} alt="Phone icon" />
          <span className={S.phone_number}></span>
        </div>
        <div className={S.site_box}>
          <img className={S.site_image} alt="Website icon" />
          <a href={breweryInfo.website_url} className={S.site_url}>
            {breweryInfo.website_url}
          </a>
        </div>
      </section>
      <section className={S.description_section}>
        <p>
          강릉의 오랜 역사를 간직한 막걸리양조장을 다듬어 버드나무브루어리로
          새롭게 이어갑니다. 쌀, 국화, 솔잎, 오죽 등의 재료를 이용하여 한국적
          풍미의 ‘강릉맥주’를 만듭니다.
        </p>
      </section>
      <section className={S.recommend_section}>
        <figure className={S.beer_figure}>
          <figcaption className={S.beer_title_box}>
            <img className={S.beer_icon} alt="Beer icon" />
            <span className={S.beer_recommendation}></span>
          </figcaption>
          <h3 className={S.beer_name}>청키 헤이즐 임페리얼 스타우트</h3>
          <p>
            정통 독일식 필스에 대한 존중을 담아 독일산 맥아와 홉만을 사용하여
            전통 방식의 스탭 매싱으로 빚어내고 크래프트 맥주에서 하기 힘든
            장기간의 라거링을 거쳐 탄생한 저먼 필스
          </p>
        </figure>
      </section>
    </article>
  );
}
