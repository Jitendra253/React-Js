import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import { MENU_URL } from "../utils/constants";
import "./RestaurantMenu.css";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestarurantMenu = () => {
  const [resInfo, setResInfo] = useState(null)
  useEffect(() => {
    fetchMenu();
  }, [])
  const { resId } = useParams();
  console.log(`${MENU_URL}${resId}`)
  console.log(resId)
  const fetchMenu = async () => {
    const data = await fetch(`${MENU_URL}${resId}`);
    const json = await data.json();
    setResInfo(json.data)

    console.log(resInfo)
  }
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
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(', ')}</h3>
      <h3>{costForTwoMessage}</h3>

      {menuCategories.map((category) => (
        <div className="menu-category" key={category.title}>
          <h3>
            {category.title} ({category.itemCards.length})
          </h3>

          {category.itemCards.map((item) => {
            const dish = item.card.info;

            return (
              <div className="menu-item" key={dish.id}>
                <div className="dish-details">
                  <h4>{dish.name}</h4>

                  <p className="dish-price">
                    ₹
                    {(
                      (dish.price ?? dish.defaultPrice ?? 0) / 100
                    ).toFixed(2)}
                  </p>

                  <p className="dish-description">
                    {dish.description}
                  </p>
                </div>

                {dish.imageId && (
                  <img
                    className="dish-image"
                    src={`${CDN_URL}/${dish.imageId}`}
                    alt={dish.name}
                    loading="lazy"
                  />
                )}
              </div>
            );
          })}
        </div>
      ))}

    </div>
  )
}
export default RestarurantMenu;
