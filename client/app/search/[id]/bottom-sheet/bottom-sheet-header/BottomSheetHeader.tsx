import React, { Dispatch, SetStateAction } from "react";
import S from "./BottomSheetHeader.module.scss";
import MouseClick from "@/types/MouseClick";

interface Props {
  handleClick: Dispatch<SetStateAction<MouseClick>>;
}

const BottomSheetHeader = () => {
  return (
    <div className={S.main}>
      <div className={S.handle}></div>
      <div>
        <button>X</button>
        <span>브루어리 이름</span>
      </div>
    </div>
  );
};

export default BottomSheetHeader;
