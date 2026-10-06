import React, { useState } from "react";
import { restaurants } from "../utils/mockData";
import { ReturantCard } from "./ReturantCard";

export const Body = () => {
  const restaurantList =
    restaurants?.data?.cards?.find((card) =>card?.card?.card?.id === "restaurant_grid_listing_v2")?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  const [filteredRestaurants, setFilteredRestaurants] =useState(restaurantList);

  const filter = () => {
    const filtered = restaurantList.filter(
      (restaurant) => Number(restaurant?.info?.avgRating) > 4.4
    );

    setFilteredRestaurants(filtered);
  };

  return (
    <div className="body">
      <button onClick={filter} className="filter-btn">
        Top Rated Restaurants
      </button>

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