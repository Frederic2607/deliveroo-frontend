import React from "react";
import logo from "../assets/img/Deliveroo_logo.svg";

const Header = ({ data }) => {
  return (
    <section className="header">
      <div className="topBar">
        <div className="logo-center">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="restaurant-infos">
        <div className="restaurant-center">
          <div className="restaurant-text">
            <h1>{data.restaurant.name}</h1>
            <p>{data.restaurant.description}</p>
          </div>
          <img
            className="restaurant-img"
            src={data.restaurant.picture}
            alt="restaurant"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
