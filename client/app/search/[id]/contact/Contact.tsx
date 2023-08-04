"use client";

import React, { useRef, useState } from "react";
import S from "./Contact.module.scss";
import Brewery from "@/types/Brewery";
import useDebounce from "@/utils/useDebounce";
import MouseClick from "@/types/MouseClick";
import OpeningHours from "./OpeningHours";

const Contact = ({
  stateProvince,
  city,
  address,
  phone,
  websiteUrl,
  officeHours,
}: Pick<
  Brewery,
  "stateProvince" | "city" | "address" | "phone" | "websiteUrl" | "officeHours"
>) => {
  const [showNotification, setShowNotification] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const debouncedSetShowNotification = useDebounce(() => {
    setShowNotification(false);
  });
  const fullAddress = `${stateProvince} ${city} ${address}`;
  const phoneNumber = phone.replaceAll("-", "");
  const handleClick = (e: MouseClick) => {
    navigator.clipboard.writeText(fullAddress);
    setShowNotification(true);
    debouncedSetShowNotification();
  };

  return (
    <section className={S.main}>
      <address className={S.address_box} onClick={handleClick}>
        <img
          className={S.address_image}
          src="/images/icons/location.svg"
          alt="Address icon"
        />
        <span>{fullAddress}</span>
        <button className={S.copy_address_button} ref={buttonRef}>
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
      <OpeningHours officeHours={officeHours} />
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
        <a href={websiteUrl} target="_blank" className={S.site_url}>
          웹사이트
        </a>
      </div>
    </section>
  );
};

export default Contact;
