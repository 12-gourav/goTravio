import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Why = () => {
  return (
    <>
      {/* ===== SEO SCHEMA (SAFE FOR SECTION) ===== */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Why Choose GoTravio",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Well-Maintained Cab Fleet",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "On-Time & Reliable Taxi Service",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Professional & Verified Drivers",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Transparent Cab Pricing",
              },
            ],
          })}
        </script>
      </Helmet>

      <section className="why">
        {/* SEO-STRONG HEADING */}
        <h1>
          Why Choose <span style={{ color: "#ef3e44" }}>GoTravio </span>
          for Cab Booking & Car Rental
        </h1>

        <p>
          GoTravio is a trusted cab booking and car rental service in India,
          committed to delivering reliable, comfortable, and hassle-free travel.
          From local daily rides to airport transfers and outstation journeys,
          we focus on quality, punctuality, and customer satisfaction.
        </p>

        <div className="wrapper">
          {/* CARD 1 */}
          <motion.div
            initial={{ x: -100, scale: 0 }}
            whileInView={{ x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ type: "tween", duration: 0.8 }}
            className="card"
          >
            <div className="icon">
              <i className="bx bxs-car"></i>
            </div>
            <h3>Well-Maintained Cab Fleet</h3>
            <p>
              Our cars are regularly serviced and professionally cleaned to
              ensure safe, comfortable, and premium cab booking experiences.
            </p>
          </motion.div>

          {/* CARD 2 */}
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
            <h3>Reliable Taxi Service</h3>
            <p>
              We respect your time. Our cab services ensure punctual pickups,
              smooth travel, and timely arrivals for every journey.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{ x: -100, scale: 0 }}
            whileInView={{ x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ type: "tween", duration: 0.8 }}
            className="card"
          >
            <div className="icon">
              <i className="bx bx-user-check"></i>
            </div>
            <h3>Professional & Verified Drivers</h3>
            <p>
              Our experienced drivers are courteous, background-verified, and
              trained to provide safe and professional cab services.
            </p>
          </motion.div>

          {/* CARD 4 */}
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
            <h3>Transparent & Fair Pricing</h3>
            <p>
              Enjoy honest cab pricing with no hidden charges. Fares are
              discussed clearly for complete peace of mind.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Why;
