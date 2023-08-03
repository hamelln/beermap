"use client";

import React, { useRef, useState } from "react";
import S from "./Contact.module.scss";
import Brewery from "@/types/Brewery";
import useDebounce from "@/utils/useDebounce";
import MouseClick from "@/types/MouseClick";

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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const debouncedSetShowNotification = useDebounce(() => {
    setShowNotification(false);
  });
  const fullAddress = `${stateProvince} ${city} ${address1}`;
  const phoneNumber = phone.replaceAll("-", "");
  const handleClick = (e: MouseClick) => {
    e.stopPropagation();
    const address = `${stateProvince} ${city} ${address1}`;
    navigator.clipboard.writeText(address);
    setShowNotification(true);
    debouncedSetShowNotification();
  };

  const openMap = () => {};

  return (
    <section className={S.main}>
      <address className={S.address_box} onClick={openMap}>
        <img
          className={S.address_image}
          src="/images/icons/location.svg"
          alt="Address icon"
        />
        <span>{fullAddress}</span>
        <button
          className={S.copy_address_button}
          onClick={handleClick}
          ref={buttonRef}
        >
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
        <div>
          <details className={S.details}>
            <summary className={S.summary}>
              <div>오늘(수)</div>
              <div className={S.office_hours_inner_box}>
                <time>12:00 - 23:00</time>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={S.feather_chevron}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </summary>
            <div className={S.content}>
              <div>브레이크 타임</div>
              <time>16:00 - 17:00</time>
            </div>
          </details>
        </div>
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
