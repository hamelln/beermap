"use client";

import React, { useRef, useState } from "react";
import S from "./Contact.module.scss";
import Brewery from "@/types/Brewery";
import useDebounce from "@/utils/useDebounce";
import MouseClick from "@/types/MouseClick";
import OpeningHours from "./OfficeHours";
import LocationIcon from "@/app/icons/LocationIcon";
import PhoneIcon from "@/app/icons/PhoneIcon";
import LinkIcon from "@/app/icons/LinkIcon";

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
        <LocationIcon />
        <span>{fullAddress}</span>
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
        <PhoneIcon />
        <a href={`tel:${phoneNumber}`} className={S.phone_number}>
          {phone}
        </a>
      </div>
      <div className={S.site_box}>
        <LinkIcon />
        <a href={websiteUrl} target="_blank" className={S.site_url}>
          웹사이트
        </a>
      </div>
    </section>
  );
};

export default Contact;