// src/components/SmartCrop.tsx
import React, { useState } from 'react';

const SmartCrop = () => {
  const [region, setRegion] = useState('');
  const [month, setMonth] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRecommend = async () => {
    if (!region || !month) return;
    setLoading(true);

    try {
      const prompt = `I am located in ${region} and it's the month of ${month}. Suggest me the best crops to grow.`;
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'openai/gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
        }),
      });

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || "🌾 Sorry, couldn't get a recommendation.";
      setRecommendation(reply);
    } catch (err) {
      console.error(err);
      setRecommendation("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-green-700 mb-4">🌱 Smart Crop Recommendation</h2>
      <div className="space-y-3">
        <input
          type="text"
          className="w-full border px-4 py-2 rounded-md"
          placeholder="Enter your region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
        <input
          type="text"
          className="w-full border px-4 py-2 rounded-md"
          placeholder="Enter current month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
        <button
          onClick={handleRecommend}
          disabled={loading}
          className="bg-green-600 w-full text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          {loading ? 'Loading...' : 'Get Recommendation'}
        </button>
        {recommendation && (
          <div className="mt-4 bg-green-50 p-4 rounded-md border border-green-200 text-green-900">
            {recommendation}
          </div>
        )}
      </div>
    </div>
  );
};

export default SmartCrop;
