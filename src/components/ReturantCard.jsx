import React from "react";
import { CDN_URL } from "../utils/constants";

export const ReturantCard = ({ item }) => {
  const imageUrl = `${CDN_URL}/${item.cloudinaryImageId}`;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={imageUrl}
        alt={item.name}
      />

      <div className="res-details">
        <h3>{item.name}</h3>

        <div className="rating">
          <span>★</span> {item.avgRating}
        </div>

        <p className="cuisine">
          {item.cuisines?.join(", ")}
        </p>

        <p className="price">
          {item.costForTwo}
        </p>

        <p className="delivery">
          🛵 {item.sla?.slaString}
        </p>
      </div>
    </div>
  );
};