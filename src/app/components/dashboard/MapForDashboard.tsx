"use client";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { Rectangle, icon, popup } from "leaflet";
import type { IOrder } from "@app/interfaces";
import { BaseRecord, useNavigation } from "@refinedev/core";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

import "leaflet-routing-machine";

interface RoutingMachineProps {
  waypoints: [number, number][];
  item: string[]; // Array of waypoints
}

const RoutingMachine: React.FC<RoutingMachineProps> = ({ waypoints, item }) => {
  const map = useMap();
  // clearMap(map);

  // console.log("POint", waypoints);

  const BikeIcon = new L.Icon({
    iconUrl:
      "https://img.icons8.com/?size=100&id=SxC2hmS49DQd&format=png&color=000000", // Replace with the path to your custom image
    iconSize: [32, 32], // Size of the icon
    // iconAnchor: position && [Number(position[0]), Number(position[1])], // Point of the icon which will correspond to marker's location
    //   popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
  });

  const CustomerIcon = new L.Icon({
    iconUrl:
      "https://img.icons8.com/?size=100&id=JV4CtfM2e55t&format=png&color=000000", // Replace with the path to your custom image
    iconSize: [32, 32], // Size of the icon
    // iconAnchor: position && [Number(position[0]), Number(position[1])], // Point of the icon which will correspond to marker's location
    //   popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
  });

  useEffect(() => {
    if (!map) return;

    // Initialize routing control
    const routingControl = L.Routing.control({
      waypoints: waypoints.map(([lat, lng]) => L.latLng(lat, lng)),
      lineOptions: {
        styles: [{ color: "blue", weight: 4 }],
        extendToWaypoints: false,
        missingRouteTolerance: 0,
      },
      routeWhileDragging: false,
      // draggableWaypoints: false,
      addWaypoints: false,
      // Use type assertion to bypass type checking
      createMarker: () => null, // Hide default markers
    } as any).addTo(map);

    const icons = [BikeIcon, CustomerIcon];
    waypoints?.map((position, index) => {
      const marker = L.marker(position, {
        icon: icons[index],
        title: item[index],
      }).addTo(map);

      marker.bindPopup(item[index]);
    });
  }, [map, waypoints]);

  return null;
};
const MapDComponent = ({ data }: { data: IOrder | undefined | BaseRecord }) => {
  //   console.log("MapCompo", data);
  //   console.log(data);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  const CourierPosition = Array.isArray(data)
    ? data.map((item) => item?.courier?.store?.address?.coordinate || [0, 0])
    : [];
  const CustomerPosition = Array.isArray(data)
    ? data.map((item) => item?.adress?.coordinate || [0, 0])
    : [];
  const CourierPopup = Array.isArray(data)
    ? data.map((item) => item?.courier?.store?.address?.text)
    : [];

  const CustomerPopup = Array.isArray(data)
    ? data.map((item) => item?.adress?.text)
    : [];
  //   const customIcon = new L.Icon({
  //     iconUrl:
  //       "https://png.pngtree.com/png-clipart/20230123/original/pngtree-flat-red-location-sign-png-image_8927579.png", // Replace with the path to your custom image
  //     iconSize: [32, 32], // Size of the icon
  //     iconAnchor: position, // Point of the icon which will correspond to marker's location
  //     //   popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
  //   });

  const BikeIcon = L.icon({
    iconUrl: "/images/marker-courier.svg", // Path to your SVG file
    iconSize: [32, 32], // Adjust size as needed
    iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
  });
  const CustomerIcon = new L.Icon({
    iconUrl: "/images/marker-customer.svg", // Path to your SVG file
    iconSize: [32, 32], // Adjust size as needed
    iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
  });

  const CenterPosition: any = ["40.73061", "-73.935242"];

  return (
    <>
      {CourierPosition[0] !== undefined && (
        <MapContainer
          bounds={[[CenterPosition[0], CenterPosition[1]]]}
          zoom={10}
          scrollWheelZoom={false}
          // className="col-md-12"
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer
            maxZoom={10}
            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {CourierPosition.map((item, index) => (
            <Marker
              key={"Courier" + index}
              position={[item[0], item[1]]}
              icon={BikeIcon}
            >
              {CourierPopup.map((item, index) => (
                <Popup key={"CourierPopup" + index}>{item}</Popup>
              ))}
            </Marker>
          ))}
          {CustomerPosition.map((item, index) => (
            <Marker
              key={"Customer" + index}
              position={[item[0], item[1]]}
              icon={CustomerIcon}
            >
              {CustomerPopup.map((item, index) => (
                <Popup key={"CustomerPopup" + index}>{item}</Popup>
              ))}
            </Marker>
          ))}
        </MapContainer>
      )}
    </>
  );
};

export default MapDComponent;
