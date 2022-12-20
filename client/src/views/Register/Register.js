import React from "react";
import "./Register.css";
import headerImg from './img/man-chatting-tree.png'
function Register() {
  return (
    <>
      <div className="container mt-3">
        <div className="register">
          <div className="row">
            <h4 className="text-center register-quote mt-2"><u>“The spine is the tree of life. Respect it.🌴” </u></h4>
            <h2 className="text-center mt-3">KTF-NGO🌳</h2>
            <div className="col-md-6">
              <div className="mt-5 ">
                <form>
                  <div className="mb-3 mt-5">
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      placeholder="FullName"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="phone"
                      className="form-control"
                      id="mobile"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <button type="button" className="btn btn-success w-100">Register</button>
                </form>
              </div>
            </div>
            <div className="col-md-6 mt-3 ">
              <img
                src={headerImg}
                alt=""
                className="register-tree-img mx-auto d-block"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
