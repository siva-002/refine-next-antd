import React from "react";
import Map, { NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css"; // Add Mapbox CSS if using Mapbox styles

const MapComponent = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 51.505,
    longitude: -0.09,
    zoom: 13,
    bearing: 0,
    pitch: 0,
  });

  // Function to handle viewport changes
  const handleViewportChange = (nextViewport: any) => {
    setViewport(nextViewport);
  };

  return (
    <Map
      {...viewport}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // OSM tiles
      mapboxAccessToken="YOUR_MAPBOX_ACCESS_TOKEN" // Mapbox token
      onMove={(evt) => handleViewportChange(evt.viewState)} // Updated event handler
    >
      <NavigationControl position="top-right" />{" "}
      {/* Optional: Navigation controls */}
    </Map>
  );
};

export default MapComponent;
