"use client";

import React, { useRef } from "react";
import S from "./Contact.module.scss";

interface Props {
  summarizedOfficeHours: string[][];
}

const AllDayOfficeHours = ({ summarizedOfficeHours }: Props) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const handleClick = () => {
    modalRef.current?.showModal();
  };

  return (
    <main className={S.modal_box}>
      <button onClick={handleClick}>요일별 영업 시간 확인</button>
      <dialog className={S.modal} ref={modalRef}>
        <h3>영업 시간 안내</h3>
        {summarizedOfficeHours.map((officeHourArray) => {
          const [days, officeHour, breakTime] = officeHourArray;
          if (officeHour === "closed") {
            return <span className={S.closed}>매주 {days}요일은 쉽니다</span>;
          }
          return (
            <>
              <div>{days}</div>
              <div>{officeHour}</div>
              {breakTime !== "none" && <div>브레이크 타임: {breakTime}</div>}
            </>
          );
        })}

        <form method="dialog">
          <button>닫기</button>
        </form>
      </dialog>
    </main>
  );
};

export default AllDayOfficeHours;
