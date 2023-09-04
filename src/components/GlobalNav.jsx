import React from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const GlobalNav = () => {
  return (
    <div className="global-nav-container">
      <div className="shop-container">
        <p>Shop</p>
        <p>Read</p>
        <p>Stores</p>
        <HiOutlineMagnifyingGlass />
      </div>
      <div className="global-nav-items">
        <p>Skin Care</p>
        <p>Body & Hand</p>
        <p>Hair</p>
        <p>Fragrance</p>
        <p>Home</p>
        <p>Kits & Travel</p>
        <p>Gifts</p>
        <p>Read</p>
        <p>Stores</p>
        <p>Facial Appoinments</p>
        <HiOutlineMagnifyingGlass />
      </div>
      <div className="user-container">
        <p>Log in</p>
        <p>Cabinet</p>
        <p>Cart</p>
      </div>
    </div>
  );
};

export default GlobalNav;
