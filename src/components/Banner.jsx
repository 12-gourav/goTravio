import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/banner.jpg";

const Banner = () => {
  return (
    <section className="banner">
      <img src={img} />
      <div className="bg">
        <div className="navbar">
          <h2>
            Go<span>Tavio</span>
          </h2>
          <div className="menu">
            <Link>About Us</Link>
            <Link>Contact Us</Link>
            <button>Login</button>
          </div>
        </div>

        <div className="box">
          <div className="form_group">
            <label>Pickup Location</label>
            <input type="text" placeholder="Enter your pickup address" />
          </div>
          <div className="form_group">
            <label>Drop Location</label>
            <input type="text" placeholder="Enter your drop address" />
          </div>
          <div className="form_group">
            <label>Pickup Date</label>
            <input type="date" placeholder="Enter your pickup date" />
          </div>
          <div className="form_group2">
            <label style={{opacity:0}}>button</label>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
