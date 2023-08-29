import burgerMenu from "../assets/images/icon-menu.svg";
import React from "react";

const Navbar = () => {
  return (
    <>
      <ul className="hidden sm:flex text-[18px] w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Editorial</a>
        </li>
        <li>
          <a href="#">Artículos</a>
        </li>
      </ul>
      <img className="w-10 h-4 cursor-pointer sm:hidden" src={burgerMenu} alt="Menu hambuerguesa" />
    </>
  );
};

export default Navbar;
