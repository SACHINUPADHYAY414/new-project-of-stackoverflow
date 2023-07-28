/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


//import botLogo from "../../assets/bot.png";

// Stylesheet
import "./style.scss";

// Components
import MassageBox from "./MassageBox";

// action for chat bot
import { sendText } from "../../actions/chatbot";

const ChatBot = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const verify = useSelector((state) => state.verifyReducer);

  const handleClick = async (e) => {
    e.preventDefault();
    if (verify) {
      if (text === "") {
        alert("Please Enter Some Text");
        return;
      }
      dispatch(
        sendText({
          text: text,
        })
      );
      setText("");
    } else {
      alert("You are not Verify for Using Chat-Bot");
      navigate("/OtpAuth");
    }
  };
  return (
    <>
      <div className="chat">
        <div className="chat-title">
          <h1>ChatBot</h1>
          <h2>I am Programmer supported Chat Bot</h2>
          <figure className="avatar">
            
          </figure>
        </div>
        <div className="messages">
          <div className="messages-content">
            <MassageBox />
          </div>
        </div>
        <form className="message-box" id="mymsg">
          <input
            type="text"
            id="MSG"
            name="MSG"
            className="message-input"
            placeholder="Type message..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <input type="submit" value="Send" className="message-submit" onClick={handleClick} />
        </form>
        <h3 className="no-browser-support" hidden>
          Sorry, Your Browser Does not Support the Web Speech API. Try Opening This Demo In Google
          Chrome.
        </h3>
      </div>
      {/* <div className="bg"></div> */}
    </>
  );
};

export default ChatBot;
