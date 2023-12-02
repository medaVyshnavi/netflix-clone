import OpenAI from "openai";
import { OPEN_API_KEY } from "./constant";

const openAiKey = new OpenAI({
  apiKey: OPEN_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default openAiKey;
