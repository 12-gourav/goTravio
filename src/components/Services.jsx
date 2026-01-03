import img from "../assets/banner.jpg";

const Services = () => {
  return (
    <section className="services">
      <h1>Services</h1>
      <p>
        We provide reliable, comfortable, and premium car rental services
        designed to meet every travel need. Whether it’s a special occasion, a
        business commitment, or a long-distance journey, our well-maintained
        vehicles and professional drivers ensure a smooth, safe, and enjoyable
        experience every time.
      </p>
      <div className="wrapper">
        <div className="card">
          <div className="left">
            <img src={img} />
          </div>
          <div className="right">
            <h2>Elegant Rides for Your Special Day</h2>
            <p>
              Arrive in style with premium, chauffeur-driven cars designed to
              make your wedding unforgettable.
            </p>
            <button><i className='bx bxl-whatsapp'></i>Connect</button>
          </div>
        </div>
        <div className="card">
          <div className="left">
            <img src={img} />
          </div>
          <div className="right">
            <h2>Seamless Airport Transfers</h2>
            <p>
              On-time pickups and drop-offs with comfort, reliability, and zero
              travel stress.
            </p>
             <button><i className='bx bxl-whatsapp'></i>Connect</button>
          </div>
        </div>
        <div className="card">
          <div className="left">
            <img src={img} />
          </div>
          <div className="right">
            <h2>Professional Travel for Business Excellence</h2>
            <p>
              Reliable, executive-class transportation tailored for meetings,
              conferences, and corporate travel.
            </p>
             <button><i className='bx bxl-whatsapp'></i>Connect</button>
          </div>
        </div>
        <div className="card">
          <div className="left">
            <img src={img} />
          </div>
          <div className="right">
            <h2>Comfortable Journeys for Long-Distance Travel</h2>
            <p>
              Explore more with spacious, well-maintained vehicles built for
              long tours and memorable road trips.
            </p>
             <button><i className='bx bxl-whatsapp'></i>Connect</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
