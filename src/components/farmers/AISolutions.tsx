import React, { useState } from 'react';
import { Brain, Sprout, Bug, Droplet } from 'lucide-react';


const AISolutions = () => {
  const [activeTab, setActiveTab] = useState('analysis');

  const tabs = [
    { id: 'analysis', label: 'Crop Analysis', icon: Brain },
    { id: 'health', label: 'Crop Health', icon: Sprout },
    { id: 'pests', label: 'Pest Detection', icon: Bug },
    { id: 'management', label: 'Crop Management', icon: Droplet },
  ];

  // Rest of the component remains the same
  const getRandomScore = () => Math.floor(Math.random() * 30) + 70;
  const getRandomPercentage = () => Math.floor(Math.random() * 100);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'analysis':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold mb-4">Yield Prediction</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Expected Yield</span>
                  <span className="text-green-600 font-bold">{getRandomScore()}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Growth Rate</span>
                  <span className="text-green-600 font-bold">{getRandomScore()}%</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold mb-4">Soil Analysis</h4>
              <div className="space-y-4">
                {['Nitrogen', 'Phosphorus', 'Potassium'].map(nutrient => (
                  <div key={nutrient} className="space-y-2">
                    <div className="flex justify-between">
                      <span>{nutrient}</span>
                      <span>{getRandomPercentage()}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 rounded-full h-2"
                        style={{ width: `${getRandomPercentage()}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'health':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-4">Crop Health Score</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Wheat', 'Rice', 'Corn', 'Soybeans'].map(crop => (
                <div key={crop} className="text-center p-4 border rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {getRandomScore()}%
                  </div>
                  <div className="text-gray-600">{crop}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'pests':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['Aphids', 'Grasshoppers'].map(pest => (
              <div key={pest} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold">{pest} Detection</h4>
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                    Alert
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Detected in Field Section {Math.floor(Math.random() * 5) + 1}
                </p>
                <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>
        );

      case 'management':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-4">Recommendations</h4>
            <div className="space-y-4">
              {[
                'Optimal irrigation schedule: Every 2 days',
                'Recommended fertilizer: NPK 14-14-14',
                'Next pest control: In 5 days',
              ].map((recommendation, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>{recommendation}</span>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === id
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-600 hover:bg-green-50'
            }`}
          >
            <Icon className="h-5 w-5" />
            {label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default AISolutions;