import React from 'react';
import { Users, ShoppingBag, Building2 } from 'lucide-react';

const userGroups = [
  {
    title: 'Farmers',
    description: 'Access modern farming tools, connect with buyers, and get support for sustainable agriculture.',
    icon: Users,
    color: 'green',
  },
  {
    title: 'Consumers',
    description: 'Buy fresh produce directly from farms and support sustainable farming practices.',
    icon: ShoppingBag,
    color: 'orange',
  },
  {
    title: 'Agro-Allied Partners',
    description: 'Provide services, equipment, and support to the farming community.',
    icon: Building2,
    color: 'gray', // changed from 'black' to 'gray' for Tailwind support
  },
];

const colorMap = {
  green: {
    bg: 'bg-green-100 dark:bg-green-800',
    icon: 'text-green-600 dark:text-green-300',
  },
  orange: {
    bg: 'bg-orange-100 dark:bg-orange-800',
    icon: 'text-orange-600 dark:text-orange-300',
  },
  gray: {
    bg: 'bg-gray-100 dark:bg-gray-800',
    icon: 'text-gray-600 dark:text-gray-300',
  },
};

const UserGroups = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 dark:text-green-400 font-semibold tracking-wide uppercase transition-colors duration-300">
            User Groups
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl transition-colors duration-300">
            Tailored Solutions for Everyone
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto transition-colors duration-300">
            Join our growing community and find the perfect solutions for your agricultural needs.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {userGroups.map((group) => (
              <div
                key={group.title}
                className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="flex-1 p-6">
                  <div className={`w-12 h-12 rounded-md flex items-center justify-center ${colorMap[group.color].bg} transition-colors duration-300`}>
                    <group.icon className={`h-6 w-6 ${colorMap[group.color].icon}`} />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500 dark:text-gray-300 transition-colors duration-300">
                    {group.description}
                  </p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-700 transition-colors duration-300">
                  <a
                    href="#"
                    className="text-base font-medium text-green-600 dark:text-green-400 hover:text-green-500 transition-colors duration-300"
                  >
                    Learn more<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGroups;
