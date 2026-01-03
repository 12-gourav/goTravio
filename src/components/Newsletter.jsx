import img from "../assets/banner.jpg";

const Newsletter = () => {
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
            <input type="text" placeholder="Enter your email addrerss" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
