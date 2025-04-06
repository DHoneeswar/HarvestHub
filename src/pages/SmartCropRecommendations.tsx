// src/pages/AICropSuggestor.tsx
import React, { useState } from "react";
import { askOpenAI } from "../services/openaiService";

const AICropSuggestor: React.FC = () => {
  const [region, setRegion] = useState("");
  const [month, setMonth] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRecommend = async () => {
    setLoading(true);
    const prompt = `Based on the region "${region}" and the month "${month}", suggest 3-5 suitable crops that a farmer can grow in India. Provide a short explanation for each.`;

    const result = await askOpenAI(prompt);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto mt-12 px-4 text-center">
      <h1 className="text-3xl font-bold mb-6 text-green-700">
        🌾 Smart Crop Recommendations (AI)
      </h1>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter Region (e.g., Tamil Nadu)"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full sm:w-64"
        />
        <input
          type="text"
          placeholder="Enter Month (e.g., April)"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full sm:w-64"
        />
        <button
          onClick={handleRecommend}
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
        >
          {loading ? "Thinking..." : "Get Suggestions"}
        </button>
      </div>

      {recommendation && (
        <div className="bg-green-50 border border-green-200 rounded-md p-4 text-left whitespace-pre-wrap">
          {recommendation}
        </div>
      )}
    </div>
  );
};

export default AICropSuggestor;
