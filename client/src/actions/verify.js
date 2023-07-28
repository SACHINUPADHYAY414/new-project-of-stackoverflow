/* eslint-disable no-unused-vars */
import * as api from "../api/indec1";

export const numberSend = (mobileData) => async (dispatch) => {
  try {
    console.log("This IS form client -> ", mobileData);
    await api.numberSend(mobileData);
  } catch (error) {
    console.log(error);
  }
};
export const otpSend = (otp, navigate) => async (dispatch) => {
  try {
    console.log("This IS form client -> ", otp);
    const { data } = await api.otpVerify(otp);
    dispatch({ type: "VERIFY", data });
    navigate("/Chatbot");
  } catch (error) {
    console.log(error);
  }
};
