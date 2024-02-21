import React, { useState } from "react";
import "./Login.css";
import loginlogo from "../../assets/image/login-logo.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [navigate, setnavigate] = useState(false)
  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth,email, password).then((res) => localStorage.setItem('userId', res?.user.uid)
    ).then(() =>
      window.location.reload(false)
    )
  }

  return (
    <div className="login-main ">
      <div className="row">
        <div className="col-md-6 col-sm-none login-left">
          <a href="/">
            <div className="login-logo-image">
            <img src={loginlogo} alt="" />
            <h2>TRACKIFYWEB</h2>
          </div>
          </a>
          <div className="login-greeting">
            <h1>Welcome Back</h1>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 login-right">
          <div className="login-heading">
            <h3>LOGIN</h3>
            <p>Please login to your account</p>
          </div>

          <div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Your Password"
              />
            </div>

            <div className="small-text">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                 Remember me
                </label>
              </div>
              <div className="forget-link">
                <a href="#">Forgot password?</a>
              </div>
            </div>
            <div className="btn-login">
              <button type="submit" onClick={handleLogin} >Login</button>
            </div>
            
          </div>

          <div className="new-user">
              <p>New User?</p>
              <a href="/signup">Sign up</a>

          </div>


          <footer className="login-footer">
            <div className="footer-text">
              <p>&#169; TrackifyWeb, 2024. All right reserved.</p>
            </div>
              
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Login;
