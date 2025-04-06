import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';


const ContactUs = () => {
  return (
    <PageWrapper>
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-600" />
                <span className="text-gray-600">+91 9396800713</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-green-600" />
                <span className="text-gray-600">HarvestHUB@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-green-600" />
                <span className="text-gray-600">Pragathi Nagar</span>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1577086664693-894d8405334a" 
              alt="Location Map" 
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    </PageWrapper>
  );
};

export default ContactUs;