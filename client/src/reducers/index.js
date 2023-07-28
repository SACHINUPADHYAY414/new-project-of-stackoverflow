import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import questionsReducer from "./questions";
import usersReducer from "./users";
import chatReducer from "./chatbot";
import errorReducer from "./error";
import loadingReducer from "./loading";
import socialReducer from "./social";
import subscriptionReducer from "./subscription";
import verifyReducer from "./verify";
import apikeyReducer from "./apiKey";
import chatbotReducer from "./chatbot";

export default combineReducers({
  authReducer,
  currentUserReducer,
  questionsReducer,
  usersReducer,
  chatReducer,
  errorReducer,
  loadingReducer,
  socialReducer,
  subscriptionReducer,
  apikeyReducer,
  verifyReducer,
  chatbotReducer,
});
