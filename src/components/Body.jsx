import React, { useState, useEffect } from "react";
// import { restaurants } from "../utils/mockData";
import { ReturantCard } from "./ReturantCard";
import Shimmer from "./Shimmer";

export const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const restaurantList =
  //   restaurants?.data?.cards?.find((card) =>card?.card?.card?.id === "restaurant_grid_listing_v2")?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING",);
    const json = await data.json();
    console.log(json)
    const restaurants = json?.data?.cards?.map((card) => card?.card?.card)?.find((card) => card?.gridElements?.infoWithStyle?.restaurants)?.gridElements?.infoWithStyle?.restaurants || [];

    setRestaurantList(restaurants);
    setFilteredRestaurants(restaurants);
  }



  const filter = () => {
    const filtered = restaurantList.filter(
      (restaurant) => Number(restaurant?.info?.avgRating) > 4.4
    );

    setFilteredRestaurants(filtered);
  };
  const handleSearch = () => {
    const searchedData = restaurantList.filter(resturant => resturant.info.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setFilteredRestaurants(searchedData)
  }

  // ! conditional Rendering

  return restaurantList.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <button onClick={filter} className="filter-btn">
          Top Rated Restaurants
        </button>
        <div className="search">
          <input type="text" className="searchBox" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <button onClick={handleSearch} className="search-btn">search</button>
        </div>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <ReturantCard
            key={restaurant.info.id}
            item={restaurant.info}
          />
        ))}
      </div>
    </div>
  );
};