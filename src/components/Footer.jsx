import img from "../assets/logo1.png";

const Footer = () => {
  return (
    <footer>
      <div className="col1">
        <img src={img} />
        <p>
          Go<span>Tavio</span> is a modern car rental and travel service
          designed to make every journey comfortable, reliable, and stress-free.
          We specialize in providing premium vehicles with professional service
          for weddings, airport transfers, business travel, and long-distance
          tours.
        </p>
      </div>
      <div className="col2">
        <h5>Important Links</h5>
        <a href="#">Privacy Policy</a>
        <a href="#">Legal Terms</a>
      </div>
      <div className="col2">
        <h5>Social Links</h5>
        <a href="#">
          <i className="bx bxl-instagram"></i>Instagram
        </a>
        <a href="https://youtube.com/@fasttravio?si=N3E3YuwUj-C9gY-w">
          <i className="bx bxl-youtube"></i>Youtube
        </a>
        <a href="#">
          <i className="bx bxl-whatsapp"></i>Whatsup
        </a>
        <a href="#">
          <i className="bx bxl-facebook"></i>Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
