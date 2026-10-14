import React from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export const ReturantCard = ({ item }) => {
  const imageUrl = `${CDN_URL}/${item.cloudinaryImageId}`;

  return (


    <div className="h-full w-[250px] overflow-hidden rounded-xl bg-white shadow-md">
      <img
        className="h-[180px] w-full object-cover"
        src={imageUrl}
        alt={item.name}
      />

      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 truncate text-xl font-bold">
          {item.name}
        </h3>

        <div className="mb-3 inline-flex items-center gap-1 self-start rounded-md bg-green-700 px-2 py-1 text-sm text-white">
          <span>★</span>
          {item.avgRating}
        </div>

        <p className="mb-2 line-clamp-2 min-h-10 text-sm text-gray-600">
          {item.cuisines?.join(", ")}
        </p>

        <p className="mb-2 text-sm">{item.costForTwo}</p>

        <p className="mt-auto text-sm text-gray-500">
          🛵 {item.sla?.slaString}
        </p>
      </div>
    </div>
  );
};