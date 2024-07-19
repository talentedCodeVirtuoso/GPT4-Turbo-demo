import OpenAI from "openai";

import { useState } from "react";

const GPT4_TURBO_API_KEY = "xxxxxxxxxxxxxxxxxxxxx";
const openai = new OpenAI({
  apiKey: GPT4_TURBO_API_KEY,
  dangerouslyAllowBrowser: true,
});

const Chat = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4-turbo",
        messages: [{ role: "system", content: input }],
      });

      setResponse(response.choices[0].message.content);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div>
      <div>
        <textarea
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows="5"
          cols="50"
          placeholder="Enter message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>
        <h1>Response:</h1>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default Chat;
