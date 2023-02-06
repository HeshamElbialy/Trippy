import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
// import Navbar from "./component/Navbar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
      {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
