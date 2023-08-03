"use client";

import React, { useState } from "react";
import {
  GoogleMap,
  InfoWindowF,
  LoadScript,
  MarkerF,
} from "@react-google-maps/api";
import S from "./GoogleMap.module.scss";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const myStyles = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
];

const center = {
  lat: -33.865143,
  lng: 151.2099,
};

interface Props {
  // center: { lat: number; lng: number };
  // breweryName: string;
  isMapOpen: boolean;
}

type Coordinate = google.maps.LatLng | google.maps.LatLngLiteral | undefined;

const GoogleMaps = ({ isMapOpen }: Props) => {
  if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) return <></>;
  if (!isMapOpen) return <></>;

  const [selectedMarker, setSelectedMarker] = useState<Coordinate>({
    lat: -33.865143,
    lng: 151.2099,
  });

  return (
    <div className={S.main}>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          options={{ disableDefaultUI: true, styles: myStyles }}
        >
          <MarkerF
            position={center}
            icon={
              "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
            }
            onClick={(e) => {}}
          ></MarkerF>
          {selectedMarker && (
            <InfoWindowF
              position={selectedMarker}
              onCloseClick={() => {
                setSelectedMarker(undefined);
              }}
            >
              <span>mansndjs</span>
            </InfoWindowF>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default React.memo(GoogleMaps);
