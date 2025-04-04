import React from 'react';
import { BarChart, LeafyGreen, Recycle } from 'lucide-react';

const SustainabilityChart: React.FC = () => {
  const sustainabilityScore = 75;
  const organicProduce = 200;
  const carbonReduction = 30;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Sustainability Impact</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sustainability Score */}
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <LeafyGreen className="h-8 w-8 text-green-600" />
            <span className="text-3xl font-bold text-green-600">{sustainabilityScore}/100</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Sustainability Score</h3>
          <div className="mt-2 bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-600 h-2.5 rounded-full"
              style={{ width: `${sustainabilityScore}%` }}
            ></div>
          </div>
        </div>

        {/* Organic Produce */}
        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <BarChart className="h-8 w-8 text-orange-600" />
            <span className="text-3xl font-bold text-orange-600">{organicProduce}kg</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Monthly Organic Produce</h3>
          <p className="text-gray-600 mt-2">Supporting local organic farmers</p>
        </div>

        {/* Carbon Footprint */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <Recycle className="h-8 w-8 text-blue-600" />
            <span className="text-3xl font-bold text-blue-600">{carbonReduction}%</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Carbon Footprint Reduction</h3>
          <p className="text-gray-600 mt-2">Compared to traditional shopping</p>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityChart;