import axios from "axios";
//const API = axios.create({ baseURL: 'http://localhost:5000'});
const API = axios.create({ baseURL: 'https://stackoverflowbackend-oucf.onrender.com'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }return req;
})


// Routes for Verify
export const numberSend = (mobileData) => API.post("/user/otpsend", mobileData);
export const otpVerify = (otpData) => API.post("/user/verify", otpData);

// Chatbot Routes
export const sendChatbot = (textDAta) => API.post("/chatbot/send", textDAta);