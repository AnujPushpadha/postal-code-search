import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAPIAsync, postalDetails, clearData } from "../searchSlice";
import "./Display.css";
const Display = () => {
  const dispatch = useDispatch();
  const data = useSelector(postalDetails);
  // console.log(data);
  return (
    <div>
      {/* Display loading indicator */}
      {data.loading && <p className="loading">Loading...</p>}

      {/* Display error message */}
      {data.error && <p>Error: {data.error}</p>}

      {/* Display fetched location information */}
      {data.data && (
        <div>
          <p>Country: {data.data.country}</p>
          <p>State: {data.data.places[0].state}</p>
          <p>Place: {data.data.places[0]["place name"]}</p>
        </div>
      )}

      {/* Add a button to clear displayed information */}
      {data.data && (
        <button onClick={() => dispatch(clearData())}>Clear</button>
      )}
    </div>
  );
};

export default Display;
