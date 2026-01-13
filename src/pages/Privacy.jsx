import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Privacy = () => {
  return (
    <>
    
  
    <section className="privacy">
      <Breadcrumb
        style={{ fontSize: "0.8rem", marginBottom: "1rem", marginTop: "1rem" }}
        items={[
          {
            title: <Link to={"/"}>Back to Home</Link>,
          },
          {
            title: "Privacy Policy",
          },
        ]}
      />
      <h1>Privacy Policy –<span> GoTravio</span></h1>
      <p>
        Go Travio (“we”, “our”, “us”) respects your privacy and is committed to
        protecting your personal information. This Privacy Policy explains how
        we collect, use, disclose, and safeguard your information when you use
        the Go Travio application, website, and related services (collectively,
        the “Service”).
      </p>
      <p>
        By using Go Travio, you agree to the practices described in this Privacy
        Policy.
      </p>

      <h3>Information We Collect</h3>
      <h5>Personal Information</h5>
      <p>
        We may collect personal information that you voluntarily provide,
        including but not limited to:
      </p>
      <ul>
        <li>Full name</li>
        <li>Phone number</li>
        <li>Pickup and drop-off locations</li>
      </ul>
      <h3>How We Use Your Information</h3>
      <p>We use your information to:</p>
      <ul>
        <li>Provide and manage cab booking and travel services</li>
        <li>Improve app performance and user experience</li>
        <li>Send booking confirmations, updates, and support messages</li>
        <li>Prevent fraud and ensure security</li>
        <li>Comply with legal obligations</li>
      </ul>
      <h3>Sharing of Information</h3>
      <p>
        We do not sell your personal data. We may share your information. All
        third parties are required to maintain confidentiality and security.
      </p>
      <h3>Data Security</h3>
      <p>
        We implement appropriate technical and organizational measures to
        protect your personal data from unauthorized access, misuse, loss, or
        disclosure. However, no system is 100% secure.
      </p>
      <h3>Contact Us</h3>
      <p>Go Travio Support </p>
      <p>
        Email:
        <a href="mailto:gotravio.info@gmail.com"> gotravio.info@gmail.com</a>
      </p>
    </section>
    <Footer/>
    </>
  );
};

export default Privacy;
