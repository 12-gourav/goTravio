import img1 from "../assets/c1.jpeg";
import img2 from "../assets/c2.jpeg";
import img3 from "../assets/c3.jpeg";
import img4 from "../assets/c4.jpeg";
import img5 from "../assets/c5.jpeg";
import { motion } from "framer-motion";

const services = [
  {
    img: img1,
    title: "Elegant Rides for Your Special Day",
    desc: "Arrive in style with premium, chauffeur-driven cars designed to make your wedding unforgettable.",
    x: -100,
  },
  {
    img: img2,
    title: "Seamless Airport Transfers",
    desc: "On-time pickups and drop-offs with comfort, reliability, and zero travel stress.",
    x: 100,
  },
  {
    img: img3,
    title: "Professional Travel for Business Excellence",
    desc: "Reliable, executive-class transportation tailored for meetings, conferences, and corporate travel.",
    x: -100,
  },
  {
    img: img4,
    title: "Comfortable Journeys for Long-Distance Travel",
    desc: "Explore more with spacious, well-maintained vehicles built for long tours and memorable road trips.",
    x: 100,
  },
  {
    img: img5,
    title: "Comfortable Journeys for Long-Distance Travel",
    desc: "Explore more with spacious, well-maintained vehicles built for long tours and memorable road trips.",
    x: -100,
  },
];

const Services = () => {
  const buildServiceMessage = (serviceTitle) => {
    return `
👋 Hello GoTavio Team,

I’m interested in your *${serviceTitle}* service.

Please share:
• Availability
• Pricing details
• Vehicle options

Looking forward to your response.
Thank you!
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

  const handleServiceConnect = (serviceTitle) => {
    const message = buildServiceMessage(serviceTitle);
    openWhatsApp(import.meta.env.VITE_PHONE, message);
  };

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
        {services.map((service, index) => (
          <motion.div
            initial={{ x: service.x, scale: 0 }}
            whileInView={{ x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ type: "tween", duration: 0.8 }}
            className="card"
            key={index}
          >
            <div className="left">
              <img src={service.img} alt={service.title} />
            </div>

            <div className="right">
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
              <button onClick={() => handleServiceConnect(service.title)}>
                <i className="bx bxl-whatsapp"></i>
                Connect
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
