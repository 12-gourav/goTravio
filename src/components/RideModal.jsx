import { Modal, TimePicker } from "antd";
import { carCategories } from "../constants/Rides";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const RideModal = ({ open, setOpen, pickup, drop, pd }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [pickupAddress, setPickupAddress] = useState("");
  const [dropAddress, setDropAddress] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropDate, setDropDate] = useState("");
  const [isReturn, setIsReturn] = useState("Yes");
  const [car, setCar] = useState(null);

  const buildWhatsAppMessage = () => {
    return `
🚖 *New Ride Booking Request*

👤 *Passenger Name:* ${name}
💰 *Expected Price:* ₹${price}

📍 *Pickup Location:* ${pickupAddress}
📍 *Drop-off Location:* ${dropAddress}

📅 *Pickup Date:* ${pickupDate}
⏰ *Pickup Time:* ${pickupTime}

🔁 *Return Trip:* ${isReturn}
${isReturn === "Yes" ? `📅 *Return Date:* ${dropDate}` : ""}

🚗 *Vehicle Type:* ${car?.title}
👥 *Seating Capacity:* ${car?.seats}

Please confirm availability and pricing.
Thank you.
`;
  };

  const openWhatsApp = (phone, message) => {
    const encodedMessage = encodeURIComponent(message);
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const url = isMobile
      ? `https://wa.me/${phone}?text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;

    window.open(url, "_blank");
  };

  const handleSubmit = async () => {
    try {
      if (name === "") return toast.error("Name is required");
      if (price === "") return toast.error("Price is required");
      if (pickupAddress === "")
        return toast.error("Pickup location is required");
      if (dropAddress === "") return toast.error("Drop location is required");
      if (pickupTime === "") return toast.error("Pickup time is required");
      if (pickupDate === "") return toast.error("Pickup date is required");
      if (isReturn === "Yes") {
        if (dropDate === "") return toast.error("Return date is required");
      }
      if (car === null) return toast.error("Car is required");

      const message = buildWhatsAppMessage();
      const WHATSAPP_NUMBER = import.meta.env.VITE_PHONE;

      
      openWhatsApp(WHATSAPP_NUMBER, message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setPickupAddress(pickup);
    setDropAddress(drop);
    setPickupDate(pd);
  }, [pickup, drop, pd]);

  return (
    <Modal
      centered
      title={
        <div className="modal_head">
          <h2>Ride Information</h2>
        </div>
      }
      open={open}
      onCancel={() => setOpen(false)}
      width={900}
      okText="Book Ride"
      okButtonProps={{
        style: {
          backgroundColor: "#ff4d4f",
          borderColor: "#ff4d4f",
        },
      }}
      cancelButtonProps={{
        style: {
          borderColor: "e4e4e4",
          color: "#474747",
        },
      }}
      onOk={handleSubmit}
    >
      <div className="ride_modal">
        <div className="form_wrap">
          <div className="form_group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="form_group">
            <label>Expected Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter your expected price"
            />
          </div>
        </div>
        <div className="form_wrap">
          <div className="form_group">
            <label>Pickup Address</label>
            <input
              type="text"
              value={pickupAddress}
              onChange={(e) => setPickupAddress(e.target.value)}
              placeholder="Enter pickup location"
            />
          </div>
          <div className="form_group">
            <label>Drop Address</label>
            <input
              type="text"
              value={dropAddress}
              onChange={(e) => setDropAddress(e.target.value)}
              placeholder="Enter drop-off location"
            />
          </div>
        </div>
        <div className="form_wrap">
          <div className="form_group">
            <label>Pickup Date</label>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              placeholder="Select pickup date"
            />
          </div>
          <div className="form_group2">
            <label>Pickup Time</label>
            <TimePicker
              use12Hours
              format="hh:mm A"
              minuteStep={1}
              showNow={false}
              onChange={(time, timeString) => setPickupTime(timeString)}
    
            />
          </div>
        </div>
        <div className="form_wrap">
          <div className="form_group">
            <label>Return Trip</label>
            <select
              value={isReturn}
              onChange={(e) => setIsReturn(e.target.value)}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="form_group">
            <label>Return Date</label>
            <input
              value={dropDate}
              onChange={(e) => setDropDate(e.target.value)}
              type="date"
              placeholder="Enter your return date"
            />
          </div>
        </div>
        <div className="form_wrap">
          <div className="form_group2">
            <label>Select Vehicle</label>
            <div className="wrapper">
              {carCategories?.map((d) => (
                <div
                  className={car && car.id === d?.id ? "card active" : "card"}
                  key={d?.id}
                  onClick={() => setCar(d)}
                >
                  <h4>{d?.title}</h4>
                  <b>Seat: {d?.seats}</b>
                  <p>{d?.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <br />
      </div>
    </Modal>
  );
};

export default RideModal;
