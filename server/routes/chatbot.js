import express from "express";
const router = express.Router();

import { chatbotGetMessage } from "../controllers/chatbot.js";

router.post("/send", chatbotGetMessage);
export default router;
