import React from 'react';
import "./Login.css";
import headerImage from './img/login-img.png'

function Login() {
  return (
   <>
   <div className='container mt-5'>
      <div className='login-page'>
        <div className='row'>
          <h2 className='text-center mt-4'>Login</h2>
          <div className='col-md-6 mt-4'>
          <img
                src={headerImage}
                alt=""
                className="login-page-img mx-auto d-block "
              />
          </div>

          <div className='col-md-6'>
            <form>
              <div className="mb-4 mt-5">
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
              <button type="button" className="btn btn-success w-100">Login</button>
            </form>
            </div>
          </div>
        </div>
        </div>
   </>
  )
}

export default Login