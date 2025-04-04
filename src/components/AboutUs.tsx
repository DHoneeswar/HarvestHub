import React from 'react';
import { Target, Users, Sprout } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission and Vision */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering farmers through technology and sustainable practices while connecting them directly with consumers for a better agricultural ecosystem.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Sprout,
              title: 'Sustainable Farming',
              description: 'We promote eco-friendly farming practices and resource optimization.'
            },
            {
              icon: Users,
              title: 'Community Building',
              description: 'Creating a network of farmers, consumers, and agricultural partners.'
            },
            {
              icon: Target,
              title: 'Innovation Focus',
              description: 'Leveraging technology for better farming outcomes.'
            }
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <step.icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-green-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { number: '10,000+', label: 'Farmers Supported' },
              { number: '50,000+', label: 'Customers Served' },
              { number: '100+', label: 'Partner Organizations' }
            ].map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{achievement.number}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;