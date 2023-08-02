import React, { Dispatch, SetStateAction } from "react";
import S from "./MapCloser.module.scss";
import MouseClick from "@/types/MouseClick";

interface Props {
  handleClick: Dispatch<SetStateAction<MouseClick>>;
}

const MapCloser = () => {
  return (
    <div className={S.main}>
      <button className={S.close_button}>{"<"}</button>
      <span className={S.close_text}>브루어리</span>
      <button className={S.close_button}>{"X"}</button>
    </div>
  );
};

export default MapCloser;
