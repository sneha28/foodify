import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your Favourite Vegetarian food here</h2>
        <p>
          Discover delicious vegetarian food, learn about the health benefits
          of a plant-based diet, and join our community of health-conscious
          individuals.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
