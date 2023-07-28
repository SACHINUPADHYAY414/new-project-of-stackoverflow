/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import OTPInput, { ResendOTP } from "otp-input-react";

// actions
import { numberSend, otpSend } from "../../actions/verify";

// Style sheet
import "./style.scss";

// components
import AuthDetails from "./AuthDetails";

const OtpAuth = () => {
  // Input Variables
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isnumberGet, setIsnumberGet] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Function for send mobile number to server
  const oneSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Please Enter Email");
      return;
    }
    console.log("this Form Auth page", email);
    dispatch(numberSend({ email }));
    setIsnumberGet(true);
  };

  // Function for send OTP to server and Use chat bot
  const onVerify = (e) => {
    e.preventDefault();
    dispatch(otpSend({ otp: otp }, navigate));
     navigate("/Chatbot");
  };

  return (
    <div className="authPage">
      <AuthDetails />

      {!isnumberGet ? (
        <div className="mobile-form form-section">
          <i className="ri-mail-check-fill" style={{ fontSize: "5rem" }}></i>
          <form>
            <h2>Send OTP to Email</h2>
            <label htmlFor="mobile">
              <h4>Email:</h4>

              <div className="input_div">
                <input
                  className="email_input"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter Your Email."
                />
              </div>
            </label>
            <button type="submit" onClick={oneSubmit} className="submit-btn">
              Send OTP
            </button>
          </form>
        </div>
      ) : (
        <div className="otp-verify form-section">
          <i className="ri-shield-keyhole-fill" style={{ fontSize: "5rem" }}></i>
          <form>
            <h2>Verify Your Authentication</h2>
            <label htmlFor="mobile">
              <h4>Enter OTP :</h4>
              <OTPInput
                value={otp}
                onChange={setOtp}
                autoFocus
                OTPLength={4}
                otpType="number"
                disabled={false}
              />
            </label>
            <button type="submit" className="submit-btn" onClick={onVerify}>
              verify OTP
            </button>
            <ResendOTP className="resend-btn" onResendClick={() => console.log("Resend clicked")} />
          </form>
        </div>
      )}
    </div>
  );
};

export default OtpAuth;
