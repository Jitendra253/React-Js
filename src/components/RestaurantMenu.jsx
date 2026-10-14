import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import { MENU_URL } from "../utils/constants";
import "./RestaurantMenu.css";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
const RestarurantMenu = () => {

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId)
  const restaurantInfo = resInfo?.cards?.find(
    (card) => card?.card?.card?.info
  )?.card?.card?.info;

  const {
    name,
    cuisines,
    avgRating,
    costForTwoMessage,
    locality,
    areaName,
    sla,
  } = restaurantInfo || {};
  // find menu items
  const menuCards = resInfo?.cards?.find(
    (card) => card?.groupedCard
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards ?? [];

  const menuCategories = menuCards
    .map((card) => card?.card?.card)
    .filter((category) => category?.itemCards);

  return resInfo === null ? (<Shimmer />) : (

    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Restaurant Header */}
      <div className="mb-6 rounded-xl bg-white p-6">
        <h1 className="text-3xl font-bold">{name}</h1>

        <h3 className="mt-3 text-gray-600">
          {cuisines.join(", ")}
        </h3>

        <h3 className="mt-2 font-semibold">
          {costForTwoMessage}
        </h3>
      </div>

      {/* Menu Categories */}
      {menuCategories.map((category) => (
        <div
          className="mb-6 overflow-hidden rounded-xl bg-white"
          key={category.title}
        >
          <h3 className="border-b bg-gray-50 px-5 py-4 text-lg font-bold">
            {category.title} ({category.itemCards.length})
          </h3>

          <div className="divide-y">
            {category.itemCards.map((item) => {
              const dish = item.card.info;

              return (
                <div
                  className="flex items-start justify-between gap-4 p-5"
                  key={dish.id}
                >
                  {/* Dish Details */}
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold">{dish.name}</h4>

                    <p className="mt-2 font-semibold">
                      ₹
                      {(
                        (dish.price ?? dish.defaultPrice ?? 0) / 100
                      ).toFixed(2)}
                    </p>

                    {dish.description && (
                      <p className="mt-2 text-sm text-gray-500">
                        {dish.description}
                      </p>
                    )}
                  </div>

                  {/* Dish Image */}
                  {dish.imageId && (
                    <img
                      className="h-24 w-24 shrink-0 rounded-lg object-cover sm:h-32 sm:w-32"
                      src={`${CDN_URL}/${dish.imageId}`}
                      alt={dish.name}
                      loading="lazy"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
export default RestarurantMenu;
