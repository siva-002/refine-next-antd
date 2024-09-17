"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { EnvironmentOutlined } from "@ant-design/icons";
import L from "leaflet";
import type { IOrder } from "@app/interfaces";
const MapComponent = ({ data }: { data: IOrder }) => {
  const position = data?.courier?.store?.address?.coordinate;

  //   const customIcon = new L.Icon({
  //     iconUrl:
  //       "https://png.pngtree.com/png-clipart/20230123/original/pngtree-flat-red-location-sign-png-image_8927579.png", // Replace with the path to your custom image
  //     iconSize: [32, 32], // Size of the icon
  //     iconAnchor: position, // Point of the icon which will correspond to marker's location
  //     //   popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
  //   });
  const BikeIcon = new L.Icon({
    iconUrl:
      "https://webstockreview.net/images/scooter-clipart-two-wheeler-2.png", // Replace with the path to your custom image
    iconSize: [32, 32], // Size of the icon
    iconAnchor: position, // Point of the icon which will correspond to marker's location
    //   popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
  });
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="col-md-12"
      style={{ height: "50vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]} icon={BikeIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
