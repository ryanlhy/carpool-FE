import React from "react";
import { Image } from "react-bootstrap";

function DriverProfile({ name, overallRating, totalRides, imgSrc }) {
  return (
    <div className="mb-4 text-center">
      <Image
        src={imgSrc}
        className="mb-3"
        roundedCircle
        width="150"
        height="150"
      />
      <h2>Driver: {name}</h2>
      <p>Overall Rating: {overallRating}/5</p>
      <p>Total Rides: {totalRides}</p>
    </div>
  );
}
export default DriverProfile;
