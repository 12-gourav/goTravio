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
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/legal-terms" element={<TermsAndConditions />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
