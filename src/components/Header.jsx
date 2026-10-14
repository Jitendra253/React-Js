
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [isLoggedName, setIsloggedIn] = useState(false);
  const onlineStatus = useOnlineStatus();

  const navLinkClass = ({ isActive }) =>
    `whitespace-nowrap font-medium transition-colors hover:text-orange-500 ${isActive ? "text-orange-500 font-bold" : "text-gray-700"
    }`;

  return (

    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <NavLink to="/">
          <img
            src="https://img.magnific.com/free-vector/burger-logo-with-green-flag_1051-1010.jpg?semt=ais_hybrid&w=740&q=80"
            alt="FoodBite Logo"
            className="h-14 w-14 object-contain"
          />
        </NavLink>

        {/* Navigation */}
        <nav>
          <ul className="flex flex-wrap items-center gap-4 sm:gap-6">
            <li title={onlineStatus ? "Online" : "Offline"}>
              {onlineStatus ? "🟢" : "🔴"}
            </li>

            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={navLinkClass}>
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Contact Us
              </NavLink>
            </li>

            <li>
              <NavLink to="/grocery" className={navLinkClass}>
                Grocery
              </NavLink>
            </li>

            <li>
              <span className="cursor-pointer hover:text-orange-500">
                Cart
              </span>
            </li>

            <li>
              <button
                onClick={() => setIsloggedIn((prev) => !prev)}
                className="rounded-lg bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
              >
                {isLoggedName ? "Logout" : "Login"}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>

  );
};
