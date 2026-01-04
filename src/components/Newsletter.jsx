import { useState } from "react";
import img from "../assets/banner.jpg";
import { toast } from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

const handleSubmit = () => {
  if (!email) {
    return toast.error("Email is required");
  }

  if (!emailRegex.test(email)) {
    return toast.error("Please enter a valid email address");
  }

  toast.success("You're subscribed successfully. Welcome to our newsletter!");
};


  return (
    <section className="newsletter">
      <div className="wrap">
        <img src={img} />
        <div className="bg">
          <h4>Subscribe to Our Newsletter</h4>
          <p>
            Stay updated with the latest offers, travel tips, and exclusive
            deals from Go<span>Tavio</span>—delivered straight to your inbox.
          </p>
          <div className="form_group">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter your email addrerss"
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
