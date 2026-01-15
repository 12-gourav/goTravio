import img1 from "../assets/c1.jpeg";
import img2 from "../assets/c2.jpeg";
import img3 from "../assets/c3.jpeg";
import img4 from "../assets/c4.jpeg";
import img5 from "../assets/c5.jpeg";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

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
    title: "Convenient Local Cab Booking for Daily Travel",
    desc: "Book comfortable and reliable cabs for daily city travel and short-distance rides with professional drivers.",
    x: -100,
  },
];

const Services = () => {
  const buildServiceMessage = (serviceTitle) => {
    return `
👋 Hello GoTravio Team,

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
    <>
      {/* ================= SEO TAGS ================= */}
      <Helmet>
        <title>
          Cab Booking & Car Rental Services in India | GoTravio
        </title>
        <meta
          name="description"
          content="Explore GoTravio’s cab booking and car rental services in India including local daily rides, airport transfers, outstation travel, wedding cars, and corporate transport."
        />
        <link rel="canonical" href="https://gotravio.in/services" />

        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            name: "GoTravio Cab & Car Rental Services",
            url: "https://gotravio.in",
            itemListElement: services.map((service, index) => ({
              "@type": "Offer",
              position: index + 1,
              itemOffered: {
                "@type": "Service",
                name: service.title,
                description: service.desc,
                provider: {
                  "@type": "Organization",
                  name: "GoTravio",
                  url: "https://gotravio.in",
                },
              },
            })),
          })}
        </script>
      </Helmet>

      {/* ================= PAGE CONTENT ================= */}
      <section className="services">
        {/* H1 – IMPORTANT FOR SEO */}
        <h1>Our Cab Booking & <span style={{color:"#000"}}>Car Rental Services</span></h1>

        <p>
          GoTravio provides reliable, comfortable, and premium cab booking and
          car rental services across India. Whether you need a local daily ride,
          airport taxi, wedding car, business travel, or outstation journey, our
          professional drivers and well-maintained vehicles ensure a smooth and
          safe experience.
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
    </>
  );
};

export default Services;
