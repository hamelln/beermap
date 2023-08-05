"use client";

import React, { useRef } from "react";
import S from "./Contact.module.scss";

const AllDayOfficeHours = () => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const handleClick = () => {
    modalRef.current?.showModal();
  };

  return (
    <>
      <button onClick={handleClick}>요일별 영업 시간 확인</button>
      <dialog className={S.modal} ref={modalRef}>
        <h3>영업 시간 안내</h3>
        <form method="dialog">
          <button>닫기</button>
        </form>
      </dialog>
    </>
  );
};

export default AllDayOfficeHours;
