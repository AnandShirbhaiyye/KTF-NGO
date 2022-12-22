import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Home from "./views/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Testimonial from "./components/Testimonial/Testimonial";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/testimonial" element={<Testimonial/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
