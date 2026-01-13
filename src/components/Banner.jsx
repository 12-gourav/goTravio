import { Link } from "react-router-dom";
import img from "../assets/bg2.png";
import logo from "../assets/logo1.png";
import { useState } from "react";
import RideModal from "./RideModal";

const Banner = () => {
  const [open, setOpen] = useState(false);
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [pickupDate, setPickupDate] = useState("");

  return (
    <section className="banner">
      <img src={img} />
      <div className="bg">
        <div className="navbar">
          <img src={logo} />
          <div className="menu">
            {/* <Link>About Us</Link>
            <Link>Contact Us</Link> */}
          </div>
        </div>

        <div className="box">
          <div className="form_group">
            <label>Pickup Location</label>
            <input
              onChange={(e) => setPickup(e.target.value)}
              value={pickup}
              type="text"
              placeholder="Enter your pickup address"
            />
          </div>
          <div className="form_group">
            <label>Drop Location</label>
            <input
              onChange={(e) => setDrop(e.target.value)}
              value={drop}
              type="text"
              placeholder="Enter your drop address"
            />
          </div>
          <div className="form_group">
            <label>Pickup Date</label>
            <input
              onChange={(e) => setPickupDate(e.target.value)}
              value={pickupDate}
              type="date"
              placeholder="Enter your pickup date"
            />
          </div>
          <div className="form_group2">
            <label style={{ opacity: 0 }}>button</label>
            <button onClick={() => setOpen(true)}>Book Now</button>
          </div>
        </div>
      </div>
      {open && (
        <RideModal
          open={open}
          setOpen={setOpen}
          pickup={pickup}
          pd={pickupDate}
          drop={drop}
        />
      )}
    </section>
  );
};

export default Banner;
