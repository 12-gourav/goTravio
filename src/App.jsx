import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomepageHelmet from "./components/Helmet";

const App = () => {
  return (
    <>
    <HomepageHelmet/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
