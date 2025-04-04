import React from 'react';
import { Handshake, TrendingUp, Users } from 'lucide-react';

const ContractFarming = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contract Farming</h2>
          <p className="text-xl text-gray-600">
            A mutually beneficial partnership between farmers and buyers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Handshake,
              title: 'Guaranteed Income',
              description: 'Pre-agreed prices ensure stable income for farmers'
            },
            {
              icon: TrendingUp,
              title: 'Quality Produce',
              description: 'Access to better farming inputs and technology'
            },
            {
              icon: Users,
              title: 'Market Access',
              description: 'Direct connection to buyers and markets'
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-green-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
          <div className="space-y-4">
            {[
              'Farmers register and specify their farming capacity',
              'Buyers post their requirements and terms',
              'Matching and contract formation',
              'Support throughout the growing season',
              'Guaranteed purchase at agreed prices'
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractFarming;