import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-orange-500" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addCoffee"
          className={({ isActive }) => (isActive ? "text-orange-500" : "")}
        >
          Add Coffee
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/signin"
          className={({ isActive }) => (isActive ? "text-orange-500" : "")}
        >
          Sign In
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? "text-orange-500" : "")}
        >
          Users
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Mobile menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          CoffeeShop
        </NavLink>
      </div>

      {/* Large screen menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Right side */}
      <div className="navbar-end">
        <a className="btn">Order Now</a>
      </div>
    </div>
  );
};

export default Header;
