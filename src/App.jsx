import { BrowserRouter, Routes, Route } from "react-router-dom";
import Platform from "./pages/Platform";
import Career from "./pages/Career";
import AllMile from "./pages/Allmile";
import About from "./pages/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Platform />} />
        <Route path="/allmile" element={<AllMile />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
