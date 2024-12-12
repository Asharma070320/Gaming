import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginContainer.css";
import companyLogo from "./company.png";
import Footer from "./Footer/Footer";

const LoginContainer = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Navigate to the main application
    setTimeout(()=>{
        navigate("/home");
    },1000)
  };

  return (
    <div className="front_container">
      <div className="set_something">
      <img className="companyLogo" src={companyLogo} alt="company_logo" />
      <div className="login_card">
        <p>
          Login <i className="fas fa-hand-point-down"></i>
        </p>
        <div className="inps_login">
          <div className="input_wrapper">
            <input type="text" className="input_field" placeholder="Username" />
            <i className="fas fa-user input_icon userIcon"></i>
          </div>
          <div style={{ marginTop: "15px" }} className="input_wrapper">
            <input
              type="password"
              className="input_field"
              placeholder="Password"
            />
            <i className="fas fa-key input_icon userIcon"></i>
          </div>
        </div>
        <div className="login_buttons">
          <button className="login_btn" >
            Login
          </button>
          <button onClick={handleLogin} className="demo_btn">Login with demo ID</button>
        </div>
        <span className="protected_captcha">
          This site is protected by reCAPTCHA and the Google{" "}
          <a className="set_clr" href="#">Privacy Policy</a> and <a className="set_clr" href="#">Terms of Service</a> apply.
        </span>
      </div>
      <div className="foot">
      <div className="terms_condition">
          <a href="/terms-and-conditions" target="_blank">Terms and Conditions</a>
          <a href="/responsible-gaming" target="_blank">Responsible Gaming</a>
        </div>
         <div className="support">
          <p>24 X 7 Support</p>
          <div className="visibilty_hidden"></div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default LoginContainer;