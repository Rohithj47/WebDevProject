import React, { useCallback, useState, useEffect } from "react";
import { fetchRestaurants } from "../restaurant-data/restaurant-api";
import RestaurantCard from "../components/restaurant-card";

function SearchPage() {
  const [searchfield, setSearchField] = useState("");
  const [restaurantsData, setRestaurantsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const data = await fetchRestaurants();
      console.log("restaurant data: ", data);
      setRestaurantsData(data);
      // ...
    }
    fetchData();
  }, [searchfield]);

  return (
    <>
      <h1>Search restaurants</h1>
      <div className="row">
        {restaurantsData.map((ele) => (
          <RestaurantCard restaurant={ele} />
        ))}
      </div>
    </>
  );
}

export default SearchPage;
