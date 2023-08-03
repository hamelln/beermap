import React from "react";
import S from "./Contact.module.scss";
import OfficeHours from "@/types/OfficeHours";

interface Props {
  officeHours: OfficeHours;
}

const OpeningHours = ({ officeHours }: Props) => {
  const today = new Date().getDay();
  const day = ["일", "월", "화", "수", "목", "금", "토"][today];
  const operatingHours = officeHours[day as keyof OfficeHours];
  const { openTime, closeTime, breakTime, lastOrder } = operatingHours;

  return (
    <div className={S.office_hours_box}>
      <img
        className={S.office_hours_image}
        src="/images/icons/clock.svg"
        alt="Clock icon"
      />
      <div>
        <details className={S.details}>
          <summary className={S.summary}>
            <div>오늘({day})</div>
            <div className={S.office_hours_inner_box}>
              {openTime ? (
                <time>
                  {openTime} - {closeTime}
                </time>
              ) : (
                <span className={S.closed_day}>오늘은 휴무일입니다.</span>
              )}
              <div>
                <img
                  src="/images/icons/chevron-down.svg"
                  className={S.feather_chevron}
                ></img>
              </div>
            </div>
          </summary>
          {breakTime && (
            <div className={S.content}>
              <div>브레이크 타임</div>
              <time>
                {breakTime.startTime} - {breakTime.endTime}
              </time>
            </div>
          )}
          {lastOrder && (
            <div className={S.content}>
              <div>라스트 오더</div>
              <time>{lastOrder}</time>
            </div>
          )}
        </details>
      </div>
    </div>
  );
};

export default OpeningHours;
