import React, { useState } from "react";
import { Send } from "lucide-react";

const mockResponses: Record<string, string> = {
  hello: "Hi there! How can I help you with your crops today?",
  weather: "Today’s weather is sunny with mild humidity — great for fieldwork!",
  crops: "For your region this month, we recommend maize, tomatoes, and groundnuts.",
  irrigation: "Drip irrigation is ideal during dry spells. Want more options?",
  bye: "Goodbye! Wishing you a bountiful harvest!",
};

type Message = {
  text: string;
  sender: "user" | "bot";
};

const CropChatAssistant: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi! I’m your AI Crop Assistant 🌱. Ask me anything about your crops!",
      sender: "bot",
    },
  ]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = input.trim().toLowerCase();
    const botReply =
      mockResponses[userMessage] ||
      "I'm still learning. Please try a different question.";

    setMessages((prev) => [
      ...prev,
      { text: input.trim(), sender: "user" },
      { text: botReply, sender: "bot" },
    ]);
    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSendMessage();
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-green-300">
      <div className="bg-green-600 text-white px-4 py-3 text-lg font-semibold">
        🌾 AI Crop Chat Assistant
      </div>

      <div className="p-4 h-80 overflow-y-auto space-y-3 bg-gray-50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-[70%] ${
                msg.sender === "user"
                  ? "bg-green-100 text-right"
                  : "bg-white border"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex border-t border-gray-300 p-3 bg-white">
        <input
          className="flex-grow px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
          type="text"
          placeholder="Ask me about crop tips, weather, irrigation..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default CropChatAssistant;
