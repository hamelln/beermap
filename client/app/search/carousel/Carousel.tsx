"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import S from "./Carousel.module.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  images: string[];
}

const Carousel = ({ images }: Props) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };

  const settings = {
    beforeChange: (_: number, newSlide: number) => setCurrentSlide(newSlide),
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className={S.main}>
      <button className={S.prev_page_arrow} onClick={handleClick}>
        <img src="/images/icons/back-arrow.svg" alt="back-arrow icon"></img>
      </button>
      <Slider {...settings}>
        {images.map((image: string, index: number) => {
          return (
            <li key={index}>
              <img
                className={S.carousel_image}
                src={image}
                alt="brewery image"
              />
            </li>
          );
        })}
      </Slider>
      <div className={S.indicator}>
        {currentSlide + 1} / {images.length}
      </div>
    </section>
  );
};

export default Carousel;
