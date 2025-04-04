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
    color: 'black',
  },
];

const UserGroups = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">User Groups</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tailored Solutions for Everyone
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Join our growing community and find the perfect solutions for your agricultural needs.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {userGroups.map((group) => (
              <div
                key={group.title}
                className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="flex-1 p-6">
                  <div className={`w-12 h-12 rounded-md flex items-center justify-center bg-${group.color === 'black' ? 'gray' : group.color}-100`}>
                    <group.icon
                      className={`h-6 w-6 text-${group.color === 'black' ? 'gray' : group.color}-600`}
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{group.title}</h3>
                  <p className="mt-3 text-base text-gray-500">{group.description}</p>
                </div>
                <div className="p-6 bg-gray-50">
                  <a
                    href="#"
                    className="text-base font-medium text-green-600 hover:text-green-500"
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