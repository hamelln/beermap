"use client";

import React from "react";
import S from "./BottomSheet.module.scss";
import BottomSheetHeader from "./bottom-sheet-header/BottomSheetHeader";
import { useBottomSheet } from "@/utils/useBottomSheet";
import GoogleMap from "./bottom-sheet-content/GoogleMap";

const BottomSheet = () => {
  if (typeof window === "undefined") {
    return (
      <div className={S.main}>
        <BottomSheetHeader />
      </div>
    );
  }
  const MIN_Y = 60; // 바텀시트가 최대로 높이 올라갔을 때의 y 값
  const MAX_Y = (window.innerHeight * 96) / 100; // 바텀시트가 최소로 내려갔을 때의 y 값
  const { sheet, isMapOpen } = useBottomSheet(MIN_Y, MAX_Y);

  return (
    <div className={S.main} ref={sheet}>
      <BottomSheetHeader />
      <GoogleMap isMapOpen={isMapOpen} />
    </div>
  );
};

export default BottomSheet;
