import React from "react";
import Testimonial from "../../components/Testimonial/Testimonial";
import "./Home.css";
import ktfLogo from "./img/ktf-logo.jpg";
function Home() {
  return (
    <>
      <div className="container">
        <div className="head-title  mt-4">
          <h3 className="text-center">
            हम सभी का एक छोटा सा प्रयास एक बड़ा बदलाव ला सकता है।🙏
          </h3>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="mt-3">
              <img
                src={ktfLogo}
                alt=""
                className="img-fluid mx-auto d-block header-display-image"
              />
              <h3 className="text-center">KALPAVRUKSH TREE FOUNDATION</h3>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <h4 className="text-center mt-5">
              “Sorrow is knowledge, those that know the most must mourn the
              deepest, the tree of knowledge is not the tree of life.”
            </h4>
            <h4 className="text-cener mt-3">
                “I like trees because they seem more resigned to the way they have
              to live than other things do.”{" "}
            </h4>
          </div>
        </div>
        <div className="mt-2">
        <Testimonial/>
        </div> 
      </div>
    </>
  );
}

export default Home;
