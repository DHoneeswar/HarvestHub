import React from 'react';
import { LineChart, BarChart2, Cloud, Thermometer } from 'lucide-react';

const DashboardOverview = () => {
  // Randomized data for demonstration
  const performanceData = {
    yieldEfficiency: Math.floor(Math.random() * 30) + 70,
    costEfficiency: Math.floor(Math.random() * 20) + 80,
    profitTrend: Math.floor(Math.random() * 25) + 75,
  };

  const weatherData = {
    temperature: Math.floor(Math.random() * 15) + 20,
    humidity: Math.floor(Math.random() * 30) + 50,
    precipitation: Math.floor(Math.random() * 40) + 20,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Performance Metrics */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Performance</h3>
          <LineChart className="h-6 w-6 text-green-600" />
        </div>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-600">Yield Efficiency</span>
              <span className="text-sm font-medium text-green-600">{performanceData.yieldEfficiency}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 rounded-full h-2" style={{ width: `${performanceData.yieldEfficiency}%` }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-600">Cost Efficiency</span>
              <span className="text-sm font-medium text-green-600">{performanceData.costEfficiency}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 rounded-full h-2" style={{ width: `${performanceData.costEfficiency}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Weather Updates */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Weather</h3>
          <Cloud className="h-6 w-6 text-blue-600" />
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Thermometer className="h-5 w-5 text-orange-500 mr-2" />
              <span className="text-gray-600">Temperature</span>
            </div>
            <span className="font-medium">{weatherData.temperature}°C</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Humidity</span>
            <span className="font-medium">{weatherData.humidity}%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Precipitation</span>
            <span className="font-medium">{weatherData.precipitation}%</span>
          </div>
        </div>
      </div>

      {/* Market Trends */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Market Trends</h3>
          <BarChart2 className="h-6 w-6 text-green-600" />
        </div>
        <div className="space-y-4">
          {['Rice', 'Wheat', 'Corn'].map(crop => (
            <div key={crop} className="flex items-center justify-between">
              <span className="text-gray-600">{crop}</span>
              <span className="font-medium text-green-600">
                ₹{Math.floor(Math.random() * 1000) + 1000}/quintal
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;