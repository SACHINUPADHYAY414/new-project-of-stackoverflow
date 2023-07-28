/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import botLogo from "../../assets/bot.png";
const BotReply = ({ reply }) => {
  const massageRef = useRef(null);
   useEffect(() => {
     setTimeout(() => {
      massageRef.current.classList.remove("loading");
    }, 1000);
}, [massageRef]);

  return (
    <div className="mCSB_container">
      <div className="message new" ref={massageRef}>
        <figure className="avatar">
      
        </figure>
        <span style={{ fontSize: "12px", color: "black" }}>{reply}</span>
      </div>
    </div>
  );
};

export default BotReply;
