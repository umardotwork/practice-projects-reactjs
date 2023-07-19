import React from "react";
import useGeoLocation from "./useGeoLocation";

const Navigator = () => {
  const { location, requestLocationAccess, isLoading, accessDenied } =
    useGeoLocation();

  const latitudeN = localStorage.getItem("latitude");
  const longitudeN = localStorage.getItem("longitude");
  //localStorage.clear();

  return (
    <>
      <div>
        {location ? (
          <div>
            Latitude : {location.latitude}, Longitude : {location.longitude}
          </div>
        ) : isLoading ? (
          <div>Loading location...</div>
        ) : accessDenied ? (
          <div>Access denied, Allow location access</div>
        ) : (
          <p>Un-identified Error</p>
        )}
      </div>

      <p>--------------------------------------------------------------</p>

      <div>
        LocalStorage-Latitude : {latitudeN}, LocalStorage-Longitude :{" "}
        {longitudeN}
      </div>
      <div className="navigator-btn">
        <button onClick={requestLocationAccess}>Request Location Again</button>
      </div>
    </>
  );
};

export default Navigator;
