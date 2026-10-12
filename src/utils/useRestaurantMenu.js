import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

export const useRestaurantMenu = (restId) => {
  const [resInfo, setResInfo] = useState(null);
  //fetch Data;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + restId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};
