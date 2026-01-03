import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="col1">
        <h5>
          Go<span>Tavio</span>
        </h5>
        <p>
          Go<span>Tavio</span> is a modern car rental and travel service
          designed to make every journey comfortable, reliable, and stress-free.
          We specialize in providing premium vehicles with professional service
          for weddings, airport transfers, business travel, and long-distance
          tours.
        </p>
      </div>
      <div className="col2">
        <h5>Important Links</h5>
        <Link>Profile</Link>
        <a href="#">Privacy Policy</a>
        <a>Legal Terms</a>
      </div>
      <div className="col2">
        <h5>Social Links</h5>
        <a href="#"><i className='bx bxl-instagram' ></i>Instagram</a>
        <a href="#"><i className='bx bxl-youtube' ></i>Youtube</a>
        <a href="#"><i className='bx bxl-whatsapp' ></i>Whatsup</a>
        <a href="#"><i className='bx bxl-facebook'></i>Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
