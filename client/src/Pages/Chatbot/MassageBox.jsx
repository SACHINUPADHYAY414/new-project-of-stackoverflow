/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
// Components
import UserMassage from "./UserMassage";
import BotReply from "./BotReply";

const MassageBox = () => {
  const divRef = useRef();
  const messages = useSelector((state) => state.chatbotReducer);

  useEffect(() => {
    divRef.current.scrollTop = divRef.current.scrollHeight;
  }, [messages]);

  const displayMessage = (message, index) => {
    if (message.speak === "user") {
      return <UserMassage msg={message.text} key={index} />;
    } else if (message.speak === "bot") {
      return <BotReply reply={message.text} key={index} />;
    }
  };

  return (
    <div ref={divRef} style={{ height: "100%", overflow: "auto" }}>
      <BotReply reply={"Type Hii/Hello to start Conversation"} />
      {messages.data.map((message, index) => displayMessage(message, index))}
    </div>
  );
};

export default MassageBox;
