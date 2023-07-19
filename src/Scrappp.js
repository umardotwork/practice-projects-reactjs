import React, { useState } from "react";

const Scrappp = () => {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [accessDenied, setAccessDenied] = useState(false);

  const requestLocationAccess = () => {
    setIsLoading(true);
    setAccessDenied(false);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Store latitude and longitude in localStorage
          localStorage.setItem("latitude", latitude);
          localStorage.setItem("longitude", longitude);

          setLocation({
            latitude: latitude,
            longitude: longitude,
          });

          setIsLoading(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          setIsLoading(false);
          setAccessDenied(true);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setIsLoading(false);
    }
  };

  return (
    <div>
      {location ? (
        <div>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </div>
      ) : isLoading ? (
        <div>Loading location...</div>
      ) : accessDenied ? (
        <div>Access denied. Please allow location access.</div>
      ) : (
        <div>
          <button onClick={requestLocationAccess}>
            Request Location Access
          </button>
        </div>
      )}
    </div>
  );
};

export default Scrappp;
