import { useEffect, useState } from "react";

const useGeoLocation = () => {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [accessDenied, setAccessDenied] = useState(false);

  const requestLocationAccess = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          localStorage.setItem("latitude", latitude);
          localStorage.setItem("longitude", longitude);

          setLocation({
            latitude: latitude,
            longitude: longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Error getting Location");
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser");
    }
  };

  useEffect(() => {
    const getLocation = () => {
      setIsLoading(true);
      setAccessDenied(false);

      const LocalStoragelatitude = localStorage.getItem("latitude");
      const LocalStoragelongitude = localStorage.getItem("longitude");

      if (LocalStoragelatitude && LocalStoragelongitude) {
        setLocation({
          latitude: LocalStoragelatitude,
          longitude: LocalStoragelongitude,
        });
      } else if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

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

    getLocation();
  }, []);

  return { location, requestLocationAccess, isLoading, accessDenied };
};

export default useGeoLocation;
