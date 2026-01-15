import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const feedbacks = [
  {
    name: "Rahul Sharma",
    x: -100,
    message:
      "Excellent cab booking service and very professional drivers. The car was clean, comfortable, and arrived right on time. Highly recommended.",
  },
  {
    name: "Anita Verma",
    x: 100,
    message:
      "My airport taxi pickup was seamless and stress-free. The driver was punctual and the ride was very comfortable. Will definitely book again.",
  },
  {
    name: "Amit Kapoor",
    x: -100,
    message:
      "Used GoTravio for a business meeting and the experience was top-notch. Reliable service and premium-quality vehicles.",
  },
  {
    name: "Neha Singh",
    x: 100,
    message:
      "We booked a car for an outstation trip and had an amazing experience. The vehicle was spacious, well-maintained, and the journey was very smooth.",
  },
];

const Stars = () => (
  <div className="rate" aria-label="5 star rating">
    {Array.from({ length: 5 }).map((_, index) => (
      <i key={index} className="bx bxs-star"></i>
    ))}
  </div>
);

const Feedback = () => {
  return (
    <>
      {/* ===== REVIEW SCHEMA (VERY IMPORTANT FOR SEO) ===== */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "GoTravio Cab Booking Services",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "120",
            },
            review: feedbacks.map((item) => ({
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              author: {
                "@type": "Person",
                name: item.name,
              },
              reviewBody: item.message,
            })),
          })}
        </script>
      </Helmet>

      <section className="feedback">
        {/* SEO STRONG HEADING */}
        <h1>Customer Reviews for <span style={{color:"#ef3e44"}}>GoTravio</span> Cab Booking Services</h1>

        <p>
          Thousands of customers trust <strong>GoTravio</strong> for reliable cab
          booking, airport taxi services, and outstation car rentals across
          India. Here’s what our clients say about their experience with our
          professional drivers and comfortable rides.
        </p>

        <div className="wrapper">
          {feedbacks.map((item, index) => (
            <motion.div
              initial={{ x: item.x, scale: 0 }}
              whileInView={{ x: 0, scale: 1 }}
              viewport={{ once: false, amount: 0 }}
              transition={{ type: "tween", duration: 0.8 }}
              className="card"
              key={index}
            >
              <i className="bx bxs-quote-alt-left"></i>
              <Stars />
              <p>{item.message}</p>
              <p className="name">— {item.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Feedback;
