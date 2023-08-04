import React, { Suspense } from "react";
import Brewery from "@/types/Brewery";
import BreweriesApi from "@/services/BreweriesApi";
import Carousel from "@/app/search/[id]/carousel/Carousel";
import StarButton from "./star/StarButton";
import S from "./BreweryDetails.module.scss";
import Contact from "./contact/Contact";
import BottomSheet from "./bottom-sheet/BottomSheet";
import CarouselSkeleton from "./carousel/CarouselSkeleton";

interface Props {
  params: { id: string };
}

export default async function BreweryDetails({ params }: Props) {
  const breweriesApi = new BreweriesApi();
  const id = params.id;
  const breweryInfo: Brewery = await breweriesApi.fetchBreweryById(id);
  const {
    breweryName,
    breweryDescription,
    stateProvince,
    city,
    address,
    phone,
    websiteUrl,
    officeHours,
    latitude,
    longitude,
    signatureBeer,
  } = breweryInfo;
  const { beerName, beerDescription } = signatureBeer;
  const images = ["/brewery-image.png", "/brewery-image.png"];
  const breweryDescriptionTexts = breweryDescription.split("\\n");
  const EnteredBreweryDescription = breweryDescriptionTexts.map(
    (line, index) => {
      return (
        <span>
          {line}
          {index < breweryDescriptionTexts.length - 1 && <br />}
        </span>
      );
    }
  );

  return (
    <article className={S.main}>
      <Suspense fallback={<CarouselSkeleton />}>
        <Carousel images={images} />
      </Suspense>
      <div className={S.info_box}>
        <Suspense
          fallback={
            <header className={S.title_header}>
              <h2 className={S.title}>{breweryName}</h2>
            </header>
          }
        >
          <header className={S.title_header}>
            <h2 className={S.title}>{breweryName}</h2>
            <StarButton />
          </header>
          <Contact
            stateProvince={stateProvince}
            city={city}
            address={address}
            phone={phone}
            websiteUrl={websiteUrl}
            officeHours={officeHours}
          />
        </Suspense>
        <div className={S.cutline}></div>
        <section className={S.description_section}>
          {EnteredBreweryDescription}
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
      </div>
      <Suspense>
        <BottomSheet
          breweryName={breweryName}
          latitude={latitude}
          longitude={longitude}
        />
      </Suspense>
    </article>
  );
}
