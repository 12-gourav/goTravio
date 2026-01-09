import { useNavigate } from "react-router-dom";
import img from "../assets/3d.jpeg";
import Footer from "../components/Footer";

const About = () => {
    const Navigate = useNavigate();
  return (
    <>
        <section className="about">
      <h2>About<span onClick={()=>Navigate("/")}> GoTravio</span></h2>
      <p>
        Go Travio is a customer-focused travel assistance platform designed to
        make local and outstation travel simple, reliable, and hassle-free. Our
        goal is to help users quickly connect with trusted drivers or dealers by
        sharing essential trip details such as pickup and drop locations—without
        complicated sign-ups or online payments.
      </p>
      <br />
      <p>
        We believe travel should be easy and transparent. That’s why Go Travio
        follows a straightforward approach: users submit their trip
        requirements, we forward the information through WhatsApp to our driver
        or dealer partners, and the journey is arranged directly between both
        parties.
      </p>
      <br />
      <img src={img} alt="GoTravio" />
      <br />
      <h5>Our Mission</h5>
      <p>
        Our mission is to simplify everyday travel by providing a fast and
        accessible way for customers to find cab services with clear
        communication and fair, pre-agreed pricing.
      </p>
      <br/>
      <h5>What Makes Go Travio Different</h5>
      <ul>
        <li>
          <b>No Login Required –</b> Use the service instantly without creating
          an account
        </li>
        <li>
          <b>No Online Payments –</b> Pay directly to the driver after reaching
          your destination
        </li>
        <li>
          <b>Direct Communication –</b> Trip details are shared via WhatsApp for
          quick coordination
        </li>
        <li>
          <b>Transparent Pricing –</b>
          Fare is discussed and agreed upon with the driver or dealer
        </li>
        <li>
          <b>User-Friendly Experience -</b> Simple, clean, and easy-to-use
          platform
        </li>
      </ul>
       <br/>
      <h5>How Go Travio Works</h5>
      <ul>
        <li>Enter your pickup and drop-off locations</li>
        <li>
          Your trip details are shared with our partner drivers or dealers
        </li>
        <li>The driver contacts you directly via WhatsApp</li>
        <li>
          Travel at the agreed rate and pay after reaching your destination
        </li>
      </ul>
       <br/>
      <h5>Our Commitment</h5>
      <p>At Go Travio, we are committed to:</p>
      <ul>
        <li>Respecting user privacy and sharing only essential information</li>
        <li>Providing a smooth and reliable experience</li>
        <li>Continuously improving our platform based on user feedback</li>
      </ul>
       <br/>
      <h5>Who We Serve</h5>
      <p>
        Go Travio is built for individuals, families, and businesses looking for
        a simple travel solution without the complexity of traditional booking
        systems.
      </p>
       <br/>
      <h5>Go Travio Support</h5>
      <p>
        Email:
        <a href="mailto:gotravio.info@gmail.com"> gotravio.info@gmail.com</a>
      </p>
    </section>
    <Footer/>
    
    </>

  );
};

export default About;
