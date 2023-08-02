"use client";

import React, { useState } from "react";
import {
  GoogleMap,
  InfoWindowF,
  LoadScript,
  MarkerF,
} from "@react-google-maps/api";
import Brewery from "@/types/Brewery";

const containerStyle = {
  width: "100%",
  height: "400px",
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
  center: { lat: number; lng: number };
  breweryName: Pick<Brewery, "breweryName">;
}

const GoogleMaps = ({ center, breweryName }: Props) => {
  const [selectedMarker, setSelectedMarker] = useState<
    google.maps.LatLng | google.maps.LatLngLiteral | undefined
  >({
    lat: -33.865143,
    lng: 151.2099,
  });
  return (
    <div>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
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
              <span>{breweryName}</span>
            </InfoWindowF>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default React.memo(GoogleMaps);
