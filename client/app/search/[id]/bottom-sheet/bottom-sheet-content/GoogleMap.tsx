"use client";

import React, { useState } from "react";
import {
  GoogleMap,
  InfoWindowF,
  LoadScript,
  MarkerF,
} from "@react-google-maps/api";
import S from "./GoogleMap.module.scss";
import Brewery from "@/types/Brewery";

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
  latitude: number;
  longitude: number;
  breweryName: string;
  isMapOpen: boolean;
}

type Coordinate = google.maps.LatLng | google.maps.LatLngLiteral | undefined;

const GoogleMaps = ({ isMapOpen, breweryName, latitude, longitude }: Props) => {
  if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) return <></>;
  if (!isMapOpen) return <></>;
  const center = { lat: latitude, lng: longitude };
  const [selectedMarker, setSelectedMarker] = useState<Coordinate>(center);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
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
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(GoogleMaps);
