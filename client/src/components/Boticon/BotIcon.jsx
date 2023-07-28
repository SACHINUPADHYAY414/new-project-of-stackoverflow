/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./style.scss";

const BotIcon = () => {
  const elementRef = useRef(null);
  const location = useLocation();

  // ! If Only Authenticate User can Use then this function add
  // const navigate = useNavigate();
  // const checkAuth = () => {
  //   if (user === null) {
  //     alert("Login or signup Use for Chat-Bot");
  //     navigate("/Auth");
  //   } else {
  //     navigate("/OtpAuth");
  //   }
  // };

  // Changing style
  useEffect(() => {
    if (location.pathname === "/Chatbot") {
      elementRef.current.classList.add("active");
    } else {
      elementRef.current.classList.remove("active");
    }
  }, [location]);

  return (
    <button className="nav-btn">
      <NavLink to={"/OtpAuth"} className="side-nav-links" ref={elementRef}>
        <div className="chatbot-icon">
          <i className="ri-chat-voice-fill"></i>
        </div>
        <p
          style={{
            color: "black",
          }}
        >
          CHAT-BOT
        </p>
      </NavLink>
    </button>
  );
};

export default BotIcon;
