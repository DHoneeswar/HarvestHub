// src/components/AIAssistant.tsx
import React, { useState } from 'react';

const AIAssistant = () => {
  const [messages, setMessages] = useState([{ text: 'Hi! Ask me anything about crops 🌾', sender: 'bot' }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'meta-llama/llama-4-maverick:free',
          messages: [{ role: 'user', content: input }],
        }),
      });

      const data = await response.json();
      const botReply = data.choices?.[0]?.message?.content || "🤖 Sorry, I didn’t get that.";

      setMessages((prev) => [...prev, { text: botReply, sender: 'bot' }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { text: "⚠️ Couldn't process your request.", sender: 'bot' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-4 mt-10">
      <h2 className="text-2xl font-bold text-green-700 mb-4">🌿 AI Crop Chat Assistant</h2>
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-md ${msg.sender === 'user' ? 'bg-green-100 text-right' : 'bg-gray-100 text-left'}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-l-md px-4 py-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700"
        >
          {loading ? 'Thinking...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default AIAssistant;
