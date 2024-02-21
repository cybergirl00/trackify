import React, { useState } from "react";
import "./Signup.css";
import signuplogo from "../../assets/image/signup-logo.png";
import google from "../../assets/image/Google.png";
import gmail from "../../assets/image/Gmail.png";

// firebase auth imports
import { signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db, provider } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [isEmpty, setIsEmpty] = useState(false)

  const navigate = useNavigate()

  const GoogleSign = async () => {
    try{
   await signInWithPopup(provider)
    }catch{}
  }
  const handleSignUp = async () => {
    const userId = localStorage.getItem('userId')
    if(email === '' || name === '' || password === ''){
      setIsEmpty(true)
    } else {
     await createUserWithEmailAndPassword(auth,email,password)
     .then((res) => localStorage.setItem('userId', res?.user.uid)) 
      .then((res) =>
    addDoc(collection(db, 'users'),{
      name,
      email,
      password,
      userId
    })
     )
    .then(navigate('/'))
    .then(() => window.location.reload(false))
    }
  }
  return (
    <div className="signup-main">
      <div className="row">
        {/* The left side */}
        <div className="col-sm-12 col-md-6 signup-left">
          <div className="signup-heading">
            <h2>SIGN UP</h2>
            <p>Create your account</p>
          </div>
          {isEmpty && <h1 style={{color: 'red', fontWeight: 'bold'}} >Please Fill all the empty field</h1> }
          <div className="social-signup">
            <div className="signup-google" style={{cursor: 'pointer'}} onClick={GoogleSign}>
              <img src={google} alt="" />
              <p >Sign Up with Google</p>
            </div>
            <div className="signup-gmail">
              <img src={gmail} alt="" />
              <p>Sign Up with Email</p>
            </div>
          </div>

          <div className="signup-form">
            <div>
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-12">
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Your Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="signup-check">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    I’ve read and agree with Terms and Services and our Privacy
                    Policy
                  </label>
                </div>
              </div>
              <div className="btn-signup">
              <button type="submit" onClick={handleSignUp}>SIGN UP</button>
            </div>
            </div>

            <div className="have-account">
              <p>Already have an account?</p>
              <a href="/">Login</a>

          </div>


          <footer className="login-footer">
            <div className="footer-signup">
              <p>&#169; TrackifyWeb, 2024. All right reserved.</p>
            </div>
              
          </footer>
          </div>
        </div>
        {/* The right side */}
        <div className="col-sm-none col-md-6 signup-right">
          <img src={signuplogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
