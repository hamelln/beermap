"use client";

import React, { useEffect, useRef, useState } from "react";
import S from "./BottomSheet.module.scss";
import MapCloser from "./map-closer/MapCloser";
import GoogleMap from "./google-map/GoogleMap";

const BottomSheet = () => {
  let startY = 0;
  const [isGoogleMapVisible, setIsGoogleMapVisible] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (event: any) => {
    startY = event.touches[0].clientY;
  };

  const handleTouchMove = (event: any) => {
    const currentY = event.touches[0].clientY;
    const diffY = startY - currentY;

    if (diffY >= 100) {
      setIsGoogleMapVisible(true);
    }
  };

  useEffect(() => {
    const main = mainRef.current!;

    main.addEventListener("touchstart", handleTouchStart);
    main.addEventListener("touchmove", handleTouchMove);

    return () => {
      main.removeEventListener("touchstart", handleTouchStart);
      main.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div
      className={`${S.main} ${isGoogleMapVisible ? "active" : ""}`}
      ref={mainRef}
    >
      <div className={S.map_icon}>
        <img src="/images/icons/bottom-sheet.svg" alt="bottom-sheet icon" />
      </div>
      <div className={S.google_map_slide}>
        <MapCloser />
        <GoogleMap />
      </div>
    </div>
  );
};

export default BottomSheet;
