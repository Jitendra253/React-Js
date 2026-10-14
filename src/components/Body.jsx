import React, { useState, useEffect } from "react";
import { ReturantCard } from "./ReturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Looks like you're offline ! Please check your internet connection</h1>

  return restaurantList.length === 0 ? <Shimmer /> : (

    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Filter and Search */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:justify-between">
        <button
          onClick={filter}
          className="rounded-lg bg-orange-500 px-5 py-3 text-white hover:bg-orange-600"
        >
          Top Rated Restaurants
        </button>

        <div className="flex gap-2">
          <input
            type="text"
            className="w-full rounded-lg border px-4 py-3 sm:w-64"
            placeholder="Search restaurants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button
            onClick={handleSearch}
            className="rounded-lg bg-gray-900 px-5 py-3 text-white hover:bg-gray-700"
          >
            Search
          </button>
        </div>
      </div>

      {/* Restaurant Cards */}
      <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurant/${restaurant.info.id}`}
            className="block"
          >
            <ReturantCard item={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};