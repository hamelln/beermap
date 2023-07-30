import React from "react";
import S from "./carousel.module.scss";

const Carousel = () => {
  return (
    <div>
      <img className={S.carousel_img} src="/brewery-image.png" alt="asd"></img>
    </div>
  );
};

export default Carousel;
