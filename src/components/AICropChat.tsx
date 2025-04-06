import React, { useState } from "react";
import { askOpenAI } from "../services/openaiService"; // correct path

const AIAssistant = () => {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
  
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput("");
  
    const reply = await askOpenAI(input); // <- Calls OpenAI
    setMessages((prev) => [...prev, { text: reply, sender: "bot" }]);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">🌾 AI Crop Assistant</h2>
      <div className="h-64 overflow-y-auto border p-2 rounded mb-4 bg-gray-50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 text-sm ${
              msg.sender === "user" ? "text-right text-green-700" : "text-left text-gray-800"
            }`}
          >
            <span className="block px-3 py-2 bg-white rounded shadow inline-block">
              {msg.text}
            </span>
          </div>
        ))}
        {loading && <p className="text-gray-500 text-sm">Thinking...</p>}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border px-4 py-2 rounded"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AIAssistant;
