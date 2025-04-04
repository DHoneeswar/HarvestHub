import React from 'react';
import { Tractor, Leaf, MapPin } from 'lucide-react';

const resources = [
  {
    id: 1,
    name: 'John Deere Tractor',
    category: 'Equipment',
    price: '2000/day',
    image: 'https://images.unsplash.com/photo-1605338803155-8b46c4abf2cb?w=800',
    available: true,
  },
  {
    id: 2,
    name: 'Organic Fertilizer',
    category: 'Resources',
    price: '1200/bag',
    image: 'https://images.unsplash.com/photo-1615631648086-325025c9e51e?w=800',
    available: true,
  },
  {
    id: 3,
    name: 'Farmland - 5 Acres',
    category: 'Land',
    price: '50000/month',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
    available: false,
  },
];

const ResourceMarketplace = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Resource Marketplace</h2>
        <div className="flex gap-2">
          <select className="border rounded-md px-3 py-2 text-gray-700">
            <option>All Categories</option>
            <option>Equipment</option>
            <option>Resources</option>
            <option>Land</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <div key={resource.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src={resource.image} alt={resource.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">{resource.name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  resource.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {resource.available ? 'Available' : 'Unavailable'}
                </span>
              </div>
              <p className="text-gray-600 mb-4">₹{resource.price}</p>
              <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors">
                Contact Supplier
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceMarketplace;