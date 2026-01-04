
import {motion} from "framer-motion"

const feedbacks = [
  {
    name: "Rahul Sharma",
    x: -100,
    message:
      "Excellent service and very professional drivers. The car was clean, comfortable, and arrived right on time. Highly recommended",
  },
  {
    name: "Anita Verma",
    x: 100,
    message:
      "My airport pickup was seamless and stress-free. The driver was punctual and the ride was very comfortable. Will definitely book again",
  },
  {
    name: "Amit Kapoor",
    x: -100,
    message:
      "Used GoTavio for a business meeting and the experience was top-notch. Reliable service and premium-quality vehicles.",
  },
  {
    name: "Neha Singh",
    x: 100,
    message:
      "We booked a car for a long tour and had an amazing experience. The vehicle was spacious, well-maintained, and the journey was very smooth.",
  },
];

const Stars = () => (
  <div className="rate">
    {Array.from({ length: 5 }).map((_, index) => (
      <i key={index} className="bx bxs-star"></i>
    ))}
  </div>
);

const Feedback = () => {
  return (
    <section className="feedback">
      <h1>What Our Clients Say</h1>
      <p>
        Our customers trust Go<span>Tavio</span> for reliable service,
        comfortable rides, and professional support.
        <br />
        Here’s what they have to say about their experience with us.
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
  );
};

export default Feedback;
