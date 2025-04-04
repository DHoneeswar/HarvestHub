import React from 'react';
import { Check } from 'lucide-react';

interface SubscriptionCardProps {
  title: string;
  price: number;
  period: string;
  benefits: string[];
  isPopular?: boolean;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  title,
  price,
  period,
  benefits,
  isPopular = false,
}) => {
  return (
    <div className={`relative bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl ${
      isPopular ? 'border-2 border-orange-500' : ''
    }`}>
      {isPopular && (
        <div className="absolute top-4 right-4">
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
            Popular
          </span>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold text-orange-600">₹{price}</span>
          <span className="text-gray-500">/{period}</span>
        </div>
        <ul className="mt-6 space-y-4">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-gray-600">{benefit}</span>
            </li>
          ))}
        </ul>
        <button className={`mt-8 w-full py-3 px-6 rounded-lg text-white font-semibold transition-colors ${
          isPopular ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-800 hover:bg-gray-900'
        }`}>
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default SubscriptionCard;