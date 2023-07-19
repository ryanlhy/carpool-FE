import React from "react";

function DriverProfile({ name, overallRating, totalRides }) {
  return (
    <div className="mb-4">
      <h2>Driver: {name}</h2>
      <p>Overall Rating: {overallRating}/5</p>
      <p>Total Rides: {totalRides}</p>
    </div>
  );
}
export default DriverProfile;
