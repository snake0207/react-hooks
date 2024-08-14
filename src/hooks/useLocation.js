import { useState } from "react";

export const useLocation = (enableHighAccuracy = false) => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

  if (!("geolocation" in navigator)) {
    return;
  }

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setLocation({ latitude, longitude });
  };

  const error = () => {
    setLocation({ latitude: -9, longitude: -9 });
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
    } else {
      const options = {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000,
      };

      console.log("Locating...");

      navigator.geolocation.getCurrentPosition(
        success,
        error,
        enableHighAccuracy ? options : null
      );
    }
  };
  console.log(JSON.stringify(location));
  return { ...location, getLocation };
};
