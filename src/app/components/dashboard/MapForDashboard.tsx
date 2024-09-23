"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

// Dynamically import the MapContainer and other Leaflet components
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

// Only load Leaflet routing when rendering on the client-side
const isClient = typeof window !== "undefined";

// Component for the map and routing
const MapDComponent = ({ data }: any) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !isClient) {
    return null;
  }

  const CourierPosition =
    data?.map((item: any) => item?.courier?.store?.address?.coordinate) || [];
  const CustomerPosition =
    data?.map((item: any) => item?.adress?.coordinate) || [];
  const CenterPosition = [40.73061, -73.935242]; // Default center position

  const BikeIcon = L.icon({
    iconUrl: "/images/marker-courier.svg",
    iconSize: [32, 32],
  });
  const CustomerIcon = L.icon({
    iconUrl: "/images/marker-customer.svg",
    iconSize: [32, 32],
  });

  return (
    <>
      {CourierPosition.length > 0 && (
        <MapContainer
          zoom={10}
          scrollWheelZoom={false}
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {CourierPosition.map((pos: any, index: any) => (
            <Marker key={index} position={pos} icon={BikeIcon}>
              <Popup>{data?.[index]?.courier?.store?.address?.text}</Popup>
            </Marker>
          ))}
          {CustomerPosition.map((pos: any, index: any) => (
            <Marker key={index} position={pos} icon={CustomerIcon}>
              <Popup>{data?.[index]?.adress?.text}</Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </>
  );
};

export default MapDComponent;
