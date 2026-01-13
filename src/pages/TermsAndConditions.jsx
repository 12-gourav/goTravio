import { Breadcrumb } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <section className="privacy">
      <Breadcrumb
        style={{ fontSize: "0.8rem", marginBottom: "1rem", marginTop: "1rem" }}
        items={[
          {
            title: <Link to={"/"}>Back to Home</Link>,
          },
          {
            title: "Terms & Conditions",
          },
        ]}
      />
      <h1>Terms & Conditions – <span>GoTravio</span></h1>

      <p>
        Welcome to Go Travio. By using our application or services, you agree to
        the following Terms & Conditions. Please read them carefully before
        using the Service.
      </p>

      <h3>Nature of Service</h3>
      <p>
        Go Travio is a travel assistance platform that helps users connect with
        drivers or dealers for cab and travel-related services. We do not
        provide transportation directly.
      </p>

      <h3>No User Registration or Login</h3>
      <p>
        Go Travio does not require users to create an account or log in. You can
        use the Service without registration.
      </p>

      <h3>Information Collected</h3>
      <p>
        To provide the Service, we only collect basic trip-related information,
        including:
      </p>
      <ul>
        <li>Pickup location</li>
        <li>Drop-off location</li>
        <li>Contact number (if provided)</li>
      </ul>

      <h3>WhatsApp Communication</h3>
      <p>
        The information you provide is shared via WhatsApp with our driver or
        dealer partners to arrange your trip. By using Go Travio, you consent to
        this communication.
      </p>

      <h3>Pricing & Payments</h3>
      <p>
        Go Travio does not process online payments. The trip fare is mutually
        agreed upon between the customer and the driver or dealer before or
        during the trip.
      </p>
      <p>
        Payment is made directly by the customer to the driver or dealer after
        reaching the destination.
      </p>

      <h3>Fixed Rate Agreement</h3>
      <p>
        Any fixed rate or fare discussed is solely between the customer and the
        driver or dealer. Go Travio is not responsible for fare disputes or
        changes.
      </p>

      <h3>Limitation of Liability</h3>
      <p>
        Go Travio is not responsible for delays, route changes, vehicle
        conditions, pricing disputes, or any loss, injury, or damage arising
        during the trip.
      </p>

      <h3>User Responsibilities</h3>
      <p>You agree to:</p>
      <ul>
        <li>Provide accurate pickup and drop information</li>
        <li>Communicate clearly with the driver or dealer</li>
        <li>Follow all applicable local laws and regulations</li>
      </ul>

      <h3>Service Availability</h3>
      <p>
        We do not guarantee uninterrupted availability of the Service and may
        modify or discontinue it at any time without notice.
      </p>

      <h3>Changes to Terms</h3>
      <p>
        Go Travio may update these Terms & Conditions from time to time.
        Continued use of the Service indicates acceptance of the updated Terms.
      </p>

      <h3>Governing Law</h3>
      <p>
        These Terms & Conditions are governed by the laws of India.
      </p>

      <h3>Contact Us</h3>
      <p>Go Travio Support</p>
      <p>
        Email:
        <a href="mailto:gotravio.info@gmail.com">
          {" "}
          gotravio.info@gmail.com
        </a>
      </p>
    </section>
  );
};

export default TermsAndConditions;
