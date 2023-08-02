"use client";

import React, { useState } from "react";
import S from "./Contact.module.scss";
import Brewery from "@/types/Brewery";
import useDebounce from "@/utils/useDebounce";

const Contact = ({
  stateProvince,
  city,
  address1,
  phone,
  websiteUrl,
}: Pick<
  Brewery,
  "stateProvince" | "city" | "address1" | "phone" | "websiteUrl"
>) => {
  const [showNotification, setShowNotification] = useState(false);
  const debouncedSetShowNotification = useDebounce(() => {
    setShowNotification(false);
  });
  const fullAddress = `${stateProvince} ${city} ${address1}`;

  const phoneNumber = phone.replaceAll("-", "");
  const handleClick = () => {
    const address = `${stateProvince} ${city} ${address1}`;
    navigator.clipboard.writeText(address);
    setShowNotification(true);
    debouncedSetShowNotification();
  };

  return (
    <section className={S.info_section}>
      <address className={S.address_box}>
        <img
          className={S.address_image}
          src="/images/icons/location.svg"
          alt="Address icon"
        />
        <span>{fullAddress}</span>
        <button className={S.copy_address_button} onClick={handleClick}>
          <img src="/images/icons/copy.svg" alt="Copy icon" />
        </button>
        <div
          className={`${S.notification} ${
            showNotification && S.show_notification
          }`}
        >
          주소를 복사했습니다.
        </div>
      </address>
      <div className={S.office_hours_box}>
        <img
          className={S.office_hours_image}
          src="/images/icons/clock.svg"
          alt="Clock icon"
        />
        <time className={S.todays_office_hours}>12:00 - 23:00</time>
        <time className={S.todays_break_time}>16:00 - 17:00</time>
        <button className={S.other_office_hours}>+</button>
      </div>
      <div className={S.phone_box}>
        <img
          className={S.phone_image}
          src="/images/icons/phone.svg"
          alt="Phone icon"
        />
        <a href={`tel:${phoneNumber}`} className={S.phone_number}>
          {phone}
        </a>
      </div>
      <div className={S.site_box}>
        <img
          className={S.site_image}
          src="/images/icons/link.svg"
          alt="Website icon"
        />
        <a href={websiteUrl} className={S.site_url}>
          웹사이트
        </a>
      </div>
    </section>
  );
};

export default Contact;
