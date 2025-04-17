import React from "react";
import icons from "@/assets/icons.svg";
import './footer.css'


const Footer = () => {
  return (
    <div className="footer">
      <div className="info info1">
        <h4>Your Company</h4>
        <p>
          Our mission is to make gadjet purchase, accessible and affordable.
        </p>
      </div>

      <div className="info">
        <h4>Helpful Links</h4>
        <div className="infoChild">
        <p>Home</p>
        <p>About Us</p>
        <p>Marketplace</p>
        <p>Blog</p>
        <p>Blog</p>
        </div>
      </div>

      <div className="info">
        <h4>Site Map</h4>
        <div className="infoChild">
        <p>Our Mobile App</p>
        <p>Frequently Asked Questions</p>
        <p>Help Desk</p>
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
        </div>
      </div>

      <div className="info">
        <h4>Contact Us</h4>
        <div className="info">
          <img src={icons} alt="" />
          <p>hello@yourcompany.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
