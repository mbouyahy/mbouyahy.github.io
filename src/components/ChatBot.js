import React, { useState } from "react";
import { HfInference } from "@huggingface/inference";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const api = new HfInference(process.env.REACT_APP_HF_API_KEY);

  const sendMessage = async () => {
    if (!input) return;

    // Add user message to the chat
    setMessages([...messages, { sender: "user", text: input }]);

    // Query Hugging Face model
    const response = await api.textGeneration({
      model: "gpt2", // Example model; can be replaced
      inputs: input,
    });

    // Add bot response to the chat
    const botResponse = response.generated_text;
    setMessages([...messages, { sender: "user", text: input }, { sender: "bot", text: botResponse }]);

    setInput("");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ddd" }}>
      <h2>ChatBot</h2>
      <div style={{ height: "300px", overflowY: "auto", marginBottom: "10px", border: "1px solid #ccc", padding: "10px" }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left", margin: "5px 0" }}>
            <b>{msg.sender === "user" ? "You" : "Bot"}:</b> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "80%", marginRight: "10px" }}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage} style={{ width: "18%" }}>Send</button>
    </div>
  );
};

export default ChatBot;

