/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const UserMassage = ({ msg }) => {
  return (
    <div className="message message-personal">
      <div className="mCSB_container new">{msg}</div>
    </div>
  );
};

export default UserMassage;
