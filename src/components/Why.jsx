import {motion} from "framer-motion"

const Why = () => {
  return (
    <section className="why">
      <h1>Why Choose Us</h1>
      <p>
        We are committed to delivering reliable, comfortable, and hassle-free
        car rental services. With a focus on quality, punctuality, and customer
        satisfaction, we ensure every journey is smooth and memorable.
      </p>
      <div className="wrapper">
           <motion.div
            initial={{ x: -100, scale: 0 }}
            whileInView={{ x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ type: "tween", duration: 0.8 }}
            className="card"
          >
          <div className="icon">
            <i className="bx bxs-paint"></i>
          </div>
          <h3>Well-Maintained Fleet</h3>
          <p>
            Our vehicles are regularly serviced and thoroughly cleaned to ensure
            safety, comfort, and a premium travel experience.
          </p>
        </motion.div>
        <motion.div
            initial={{ x: 100, scale: 0 }}
            whileInView={{ x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ type: "tween", duration: 0.8 }}
            className="card1"
          >
          <div className="icon">
            <i className="bx bx-time-five"></i>
          </div>
          <h3>On-Time & Reliable Service</h3>
          <p>
            We value your time. Our drivers and services are always punctual,
            ensuring stress-free pickups and timely arrivals.
          </p>
        </motion.div>
          <motion.div
            initial={{ x: -100, scale: 0 }}
            whileInView={{ x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ type: "tween", duration: 0.8 }}
            className="card"
          >
          <div className="icon">
            <i className="bx bxl-flutter"></i>
          </div>
          <h3>Professional Chauffeurs</h3>
          <p>
            Our experienced and courteous drivers are trained to provide safe,
            comfortable, and professional service throughout your journey.
          </p>
        </motion.div>
        <motion.div
            initial={{ x: 100, scale: 0 }}
            whileInView={{ x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ type: "tween", duration: 0.8 }}
            className="card1"
          >
          <div className="icon">
            <i className="bx bx-rupee"></i>
          </div>
          <h3>Transparent Pricing</h3>
          <p>
            Enjoy clear and honest pricing with no hidden charges, giving you
            complete peace of mind while booking.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Why;
