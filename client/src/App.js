import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Home from "./views/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Testimonial from "./components/Testimonial/Testimonial";
import Antd from "./components/Antd/Antd";
import Review from "./components/Review/Review";


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
          <Route path="/antd" element={<Antd/>} />
          <Route path="/review" element={<Review/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
