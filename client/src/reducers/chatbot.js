/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-case-declarations */
const chatbotReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case "UPDATE_USER_MESSAGE":
      let massageUser = {
        speak: "user",
        text: action.payload.text,
      };
      return { ...state, data: [...state.data, massageUser] };
    case "UPDATE_BOT_MESSAGE":
      let message = {
        speak: "bot",
        text: action.payload.reply,
      };
      return { ...state, data: [...state.data, message] };
    default:
      return state;
  }
};

export default chatbotReducer;
