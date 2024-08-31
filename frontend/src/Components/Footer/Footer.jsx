import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Link to='/'><img className="footer-logo" src={assets.footer_logo} alt="" /></Link>
          <p>
            We are passionate about promoting a vegan and vegetarian lifestyle
            that is both delicious and sustainable. Our mission is to provide
            the best plant-based meals that nourish your body and soul while
            caring for the planet.
          </p>
          <p>
            Our team of dedicated chefs and food enthusiasts work tirelessly to
            create innovative and flavorful dishes that will delight your taste
            buds and inspire you to live a healthier, more compassionate life.
          </p>
          <p>
            Join us on our journey to make the world a better place, one meal at
            a time.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.instagram_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-8470</li>
            <li>contact@herbivore.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; Herbivore.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
