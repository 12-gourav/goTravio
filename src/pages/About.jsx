import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import img from "../assets/3d.jpeg";
import Footer from "../components/Footer";
import { Breadcrumb } from "antd";

const About = () => {

  return (
    <>
      {/* ===== SEO HEAD ===== */}
      <Helmet>
        <title>About GoTravio | Cab Booking & Car Rental Services in India</title>
        <meta
          name="description"
          content="Learn about GoTravio, a trusted cab booking and car rental platform in India offering local, airport, and outstation taxi services with direct driver communication."
        />
        <link rel="canonical" href="https://gotravio.in/about" />

        {/* AboutPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About GoTravio",
            url: "https://gotravio.in/about",
            description:
              "GoTravio is an Indian cab booking and car rental platform providing local, airport, and outstation taxi services.",
            publisher: {
              "@type": "Organization",
              name: "GoTravio",
              url: "https://gotravio.in",
            },
          })}
        </script>
      </Helmet>

      <section className="about">
        {/* Breadcrumb */}
        <Breadcrumb
          style={{ fontSize: "0.8rem", marginBottom: "1rem", marginTop: "1rem" }}
          items={[
            { title: <Link to="/">Home</Link> },
            { title: "About GoTravio" },
          ]}
        />

        {/* H1 – VERY IMPORTANT */}
        <h1><span>About GoTravio</span> – Simplifying Cab Booking Across India</h1>

        <p>
          <strong>GoTravio</strong> is a customer-focused cab booking and car
          rental platform in India designed to make local, airport, and
          outstation travel simple, reliable, and transparent.
        </p>

        <p>
          Our platform helps users quickly connect with trusted drivers or
          dealers by sharing essential trip details such as pickup and drop
          locations—without complicated sign-ups, mobile apps, or online
          payments.
        </p>

        <img src={img} alt="GoTravio cab booking platform in India" />

        {/* H2 */}
        <h2>Our Mission</h2>
        <p>
          Our mission is to simplify everyday travel by offering a fast and
          accessible cab booking solution with clear communication and fair,
          pre-agreed pricing.
        </p>

        {/* H2 */}
        <h2 style={{marginTop:"1rem"}}>What Makes GoTravio Different</h2>
        <ul>
          <li><b>No Login Required:</b> Book cabs instantly without registration</li>
          <li><b>No Online Payments:</b> Pay drivers directly after your trip</li>
          <li><b>Direct WhatsApp Communication:</b> Faster coordination</li>
          <li><b>Transparent Pricing:</b> No hidden charges or surge pricing</li>
          <li><b>Simple User Experience:</b> Clean and easy-to-use interface</li>
        </ul>

        {/* H2 */}
        <h2 style={{marginTop:"1rem"}}>How GoTravio Works</h2>
        <ul>
          <li>Enter your pickup and drop-off locations</li>
          <li>Your trip details are shared with verified drivers</li>
          <li>The driver contacts you directly via WhatsApp</li>
          <li>Travel comfortably and pay after reaching your destination</li>
        </ul>

        {/* H2 */}
        <h2 style={{marginTop:"1rem"}}>Cab Services We Support</h2>
        <p>
          GoTravio supports cab booking services for:
        </p>
        <ul>
          <li>Local city travel</li>
          <li>Airport taxi transfers</li>
          <li>Outstation and intercity rides</li>
          <li>Business and family travel</li>
        </ul>

        {/* H2 */}
        <h2 style={{marginTop:"1rem"}}>Who We Serve</h2>
        <p>
          We serve individuals, families, and businesses across India looking
          for a reliable alternative to traditional cab booking apps.
        </p>

        {/* Internal Links (VERY GOOD FOR SEO) */}
        <p>
          Explore our services:
          <Link to="/cab-booking-in-jamshedpur"> Jamshedpur Cabs</Link> |
          <Link to="/cab-booking-in-patna"> Patna Cabs</Link> |
          <Link to="/cab-booking-in-bihar"> Bihar Cab Services</Link>
        </p>

        {/* Contact */}
        <h2 style={{marginTop:"1rem"}}>GoTravio Support</h2>
        <p>
          Email:{" "}
          <a href="mailto:gotravio.info@gmail.com">
            gotravio.info@gmail.com
          </a>
        </p>
      </section>

      <Footer />
    </>
  );
};

export default About;
