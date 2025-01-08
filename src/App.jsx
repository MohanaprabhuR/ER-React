import { BrowserRouter, Routes, Route } from "react-router-dom";
import Platform from "./pages/Platform";
import Career from "./pages/Career";
import Product from "./pages/product";
import About from "./pages/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Platform />} />
        <Route path="/product" element={<Product />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
