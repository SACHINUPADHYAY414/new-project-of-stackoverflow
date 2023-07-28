import dialogflow from "@google-cloud/dialogflow";
import { v4 as uuidv4 } from "uuid";

// A unique identifier for the given session
const sessionId = uuidv4();
async function runSample(message, projectId = process.env.PROJECT_ID) {
  process.env.PROJECT_ID='ansbot-bgrq'
  // Create a new session
  const sessionClient = new dialogflow.SessionsClient({
    keyFilename: "./config/APIkeys.json",
  });
  const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: message,
        // The language used by the client (en-US)
        languageCode: "en-US",
      },
    },
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  const result = responses[0].queryResult;

  return result.fulfillmentText;
  // return result;
}

export const chatbotGetMessage = async (req, res) => {
  const message = req.body.text;
  const reply = await runSample(message);
  res.status(200).send({ reply });
};
