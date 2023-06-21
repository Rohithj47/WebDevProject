import React, { useCallback, useState, useEffect } from "react";
import { fetchRestaurants } from "../restaurant-data/restaurant-api";
import RestaurantCard from "../components/restaurant-card";
import { AiOutlineSearch } from "react-icons/ai";

function SearchPage() {
  const [searchfield, setSearchField] = useState("");
  const [restaurantsData, setRestaurantsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchRestaurants();
      setRestaurantsData(data);
    }
    fetchData();
  }, [searchfield]);

  return (
    <>
      <h1>Search restaurants</h1>
      <div className="row">
        <div className="col-11 position-relative">
          <input
            placeholder="Search Restaurant"
            className="form-control rounded-pill ps-5"
            onChange={(event) => {
              setSearchField(event.target.value);
            }}
          />
        </div>
        <div className="col-1" style={{ textAlign: "start" }}>
          <AiOutlineSearch className="fs-3 position-absolute wd-nudge-up" />
        </div>
      </div>
      <div className="row">
        {restaurantsData.map((ele) => (
          <RestaurantCard restaurant={ele} />
        ))}
      </div>
    </>
  );
}

export default SearchPage;
