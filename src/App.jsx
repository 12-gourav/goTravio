import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomepageHelmet from "./components/Helmet";
import Privacy from "./pages/Privacy";
import TermsAndConditions from "./pages/TermsAndConditions";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <HomepageHelmet />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* 🔥 HIGH-PRIORITY CITY PAGES */}
        <Route path="/cab-booking-in-jamshedpur" element={<Home />} />
        <Route path="/airport-taxi-in-jamshedpur" element={<Home />} />
        <Route path="/outstation-cab-in-jamshedpur" element={<Home />} />

        <Route path="/cab-booking-in-patna" element={<Home />} />
        <Route path="/airport-taxi-in-patna" element={<Home />} />
        <Route path="/outstation-cab-in-patna" element={<Home />} />

        <Route path="/cab-booking-in-bihar" element={<Home />} />
        <Route path="/cab-booking-in-pune" element={<Home />} />

        {/* 🌍 FALLBACK FOR ALL OTHER CITIES */}
        <Route path="/cab-booking-in-:city" element={<Home />} />
        <Route path="/airport-taxi-in-:city" element={<Home />} />
        <Route path="/outstation-cab-in-:city" element={<Home />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/legal-terms" element={<TermsAndConditions />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
