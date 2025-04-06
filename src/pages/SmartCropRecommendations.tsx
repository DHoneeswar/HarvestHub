import React, { useState } from "react";
import { motion } from "framer-motion";

const cropData: Record<string, string[]> = {
  "Andhra Pradesh-April": ["Maize", "Sunflower", "Paddy"],
  "Andhra Pradesh-July": ["Cotton", "Soybean", "Green gram"],
  "Tamil Nadu-April": ["Sugarcane", "Millets", "Groundnut"],
  "Tamil Nadu-July": ["Turmeric", "Rice", "Sesame"],
  "Maharashtra-April": ["Jowar", "Bajra", "Tur"],
  "Maharashtra-July": ["Cotton", "Soybean", "Rice"],
};

const SmartCropRecommendation: React.FC = () => {
  const [region, setRegion] = useState("");
  const [month, setMonth] = useState("");
  const [crops, setCrops] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const key = `${region}-${month}`;
    const recommended = cropData[key] || [];
    setCrops(recommended);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <motion.h2
          className="text-3xl font-bold text-green-700 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          🌾 Smart Crop Recommendation
        </motion.h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Region</label>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            >
              <option value="">-- Choose Region --</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Maharashtra">Maharashtra</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Month</label>
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            >
              <option value="">-- Choose Month --</option>
              <option value="April">April</option>
              <option value="July">July</option>
            </select>
          </div>

          <div className="sm:col-span-2 text-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
            >
              Get Recommendations
            </button>
          </div>
        </form>

        {submitted && (
          <motion.div
            className="bg-green-50 border border-green-200 rounded-lg p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-green-700 mb-4">
              Recommended Crops for {region} in {month}:
            </h3>
            {crops.length > 0 ? (
              <ul className="list-disc list-inside space-y-2 text-gray-800">
                {crops.map((crop, idx) => (
                  <li key={idx}>{crop}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No crop data found for this combination.</p>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SmartCropRecommendation;
