import React from 'react';
import { 
  BookOpen, 
  Globe, 
  Map, 
  ShoppingCart, 
  Users,
  Leaf,
  CloudRain,
  Brain
} from 'lucide-react';

const features = [
  {
    name: 'Real-Time Crop Pricing',
    description: 'Access transparent pricing trends and regional comparisons for informed decision-making.',
    icon: ShoppingCart,
  },
  {
    name: 'Weather Alerts',
    description: 'Stay informed with real-time weather updates and actionable farming insights.',
    icon: CloudRain,
  },
  {
    name: 'Knowledge Hub',
    description: 'Access online courses and certifications for sustainable farming practices.',
    icon: BookOpen,
  },
  {
    name: 'Multi-Language Support',
    description: 'Navigate seamlessly in your preferred language with voice assistance.',
    icon: Globe,
  },
  {
    name: 'Interactive Maps',
    description: 'Discover farm locations, nearby produce, and agro-allied services.',
    icon: Map,
  },
  {
    name: 'AI-Powered Solutions',
    description: 'Utilize advanced AI for pest detection and crop management.',
    icon: Brain,
  },
  {
    name: 'Sustainable Farming',
    description: 'Access tools and resources for eco-friendly agricultural practices.',
    icon: Leaf,
  },
  {
    name: 'Community Network',
    description: 'Connect with farmers, consumers, and agro-allied partners.',
    icon: Users,
  },
];

const Features = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 dark:text-green-400 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need to grow and succeed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            Discover our comprehensive suite of tools and services designed to support sustainable agriculture and connect communities.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div>
                  <span className="absolute top-6 left-6 text-green-600 dark:text-green-400">
                    <feature.icon className="h-6 w-6" />
                  </span>
                  <div className="ml-12">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500 dark:text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
