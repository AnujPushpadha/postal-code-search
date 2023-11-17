import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAPIAsync, postalDetails, clearData } from "../searchSlice";
import "./Search.css";
const Search = () => {
  const [postalCode, setPostalCode] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(fetchAPIAsync(postalCode));
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter postal code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          // onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Search</button>
      </div>
    </>
  );
};

export default Search;
