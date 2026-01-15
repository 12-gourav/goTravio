import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import img from "../assets/logo1.png";

const Footer = () => {
  return (
    <>
      {/* ===== ORGANIZATION SCHEMA (GLOBAL TRUST SIGNAL) ===== */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "GoTravio",
            url: "https://gotravio.in",
            logo: "https://gotravio.in/logo.png",
            sameAs: [
              "https://youtube.com/@fasttravio",
              "https://wa.me/919973362424"
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9973362424",
              contactType: "customer support",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi"]
            }
          })}
        </script>
      </Helmet>

      <footer role="contentinfo">
        {/* ===== BRAND INFO ===== */}
        <div className="col1">
          <img src={img} alt="GoTravio cab booking and car rental logo" />
          <p>
            <strong>GoTravio</strong> is a trusted cab booking and car rental
            service in India, offering local daily rides, airport taxi
            transfers, outstation travel, wedding cars, and business transport.
            We focus on comfort, reliability, transparent pricing, and
            professional drivers for a stress-free journey.
          </p>
        </div>

        {/* ===== IMPORTANT INTERNAL LINKS ===== */}
        <div className="col2">
          <h5>Important Links</h5>
          <Link to="/about">About GoTravio</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/legal-terms">Legal Terms</Link>
        </div>

        {/* ===== SOCIAL & CONTACT LINKS ===== */}
        <div className="col2">
          <h5>Connect With Us</h5>

          <a
            href="https://www.instagram.com/gotravioinfo?igsh=bGk5OGl2Z3g4aWZq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram"></i> Instagram
          </a>

          <a
            href="https://youtube.com/@fasttravio?si=N3E3YuwUj-C9gY-w"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-youtube"></i> YouTube
          </a>

          <a
            href="https://wa.me/919973362424?text=Hello%20I%20want%20to%20book%20a%20cab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-whatsapp"></i> WhatsApp
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
