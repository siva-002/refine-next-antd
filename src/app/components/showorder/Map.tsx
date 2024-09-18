"use client";
import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { EnvironmentOutlined } from "@ant-design/icons";
import L, { icon, popup } from "leaflet";
import type { IOrder } from "@app/interfaces";
import { BaseRecord } from "@refinedev/core";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

import "leaflet-routing-machine";

interface RoutingMachineProps {
  waypoints: [number, number][];
  item: string[]; // Array of waypoints
}

const RoutingMachine: React.FC<RoutingMachineProps> = ({ waypoints, item }) => {
  const map = useMap();

  const StoreIcon = new L.Icon({
    iconUrl:
      "https://static.vecteezy.com/system/resources/previews/015/131/905/original/flat-cartoon-style-shop-facade-front-view-modern-flat-storefront-or-supermarket-design-png.png", // Replace with the path to your custom image
    iconSize: [32, 32], // Size of the icon
    // iconAnchor: position && [Number(position[0]), Number(position[1])], // Point of the icon which will correspond to marker's location
    //   popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
  });

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

    L.marker(waypoints[0], {
      icon: BikeIcon,
      title: item[0],
    }).addTo(map);
    L.marker(waypoints[1], { icon: StoreIcon, title: item[1] }).addTo(map);
    L.marker(waypoints[2], { icon: CustomerIcon, title: item[2] }).addTo(map);
  }, [map, waypoints]);

  return null;
};

const MapComponent = ({ data }: { data: IOrder | undefined | BaseRecord }) => {
  const CourierPosition = data?.courier?.store?.address?.coordinate;
  const StorePosition = data?.store?.address?.coordinate;
  const CustomerPosition = data?.adress?.coordinate;
  //   const customIcon = new L.Icon({
  //     iconUrl:
  //       "https://png.pngtree.com/png-clipart/20230123/original/pngtree-flat-red-location-sign-png-image_8927579.png", // Replace with the path to your custom image
  //     iconSize: [32, 32], // Size of the icon
  //     iconAnchor: position, // Point of the icon which will correspond to marker's location
  //     //   popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
  //   });

  return (
    <>
      {CourierPosition !== undefined && (
        <MapContainer
          bounds={[
            [CourierPosition[0], CourierPosition[1]],
            [StorePosition[0], StorePosition[1]],
            [CustomerPosition[0], CustomerPosition[1]],
          ]}
          zoom={13}
          scrollWheelZoom={false}
          className="col-md-12"
          style={{ height: "50vh" }}
        >
          <TileLayer
            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* <Marker
            position={[CourierPosition[0], CourierPosition[1]]}
            icon={BikeIcon}
          >
            <Popup>{data?.courier?.store?.address?.text}</Popup>
          </Marker>
          <Marker
            position={[StorePosition[0], StorePosition[1]]}
            icon={StoreIcon}
          >
            <Popup>{data?.store?.address?.text}</Popup>
          </Marker>
          <Marker
            position={[CustomerPosition[0], CustomerPosition[1]]}
            icon={CustomerIcon}
          >
            <Popup>{data?.store?.address?.text}</Popup>
          </Marker> */}
          <RoutingMachine
            item={[
              data?.courier?.store?.address?.text,
              data?.store?.address?.text,
              data?.store?.address?.text,
            ]}
            waypoints={[
              [CourierPosition[0], CourierPosition[1]],
              [StorePosition[0], StorePosition[1]],
              [CustomerPosition[0], CustomerPosition[1]],
            ]}
          />
        </MapContainer>
      )}
    </>
  );
};

export default MapComponent;
