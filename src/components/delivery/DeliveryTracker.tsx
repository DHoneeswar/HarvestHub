import React from 'react';
import { Package, Truck, CheckCircle, Clock, Box } from 'lucide-react';

interface DeliveryStep {
  icon: React.ReactNode;
  label: string;
  date: string;
  isCompleted: boolean;
  isCurrent: boolean;
}

const DeliveryTracker: React.FC = () => {
  const orderNumber = Math.floor(Math.random() * 1000000);
  const eta = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString();
  
  const steps: DeliveryStep[] = [
    {
      icon: <Package className="h-6 w-6" />,
      label: 'Order Received',
      date: new Date(Date.now() - 24 * 60 * 60 * 1000).toLocaleDateString(),
      isCompleted: true,
      isCurrent: false,
    },
    {
      icon: <Box className="h-6 w-6" />,
      label: 'Processing',
      date: new Date(Date.now() - 12 * 60 * 60 * 1000).toLocaleDateString(),
      isCompleted: true,
      isCurrent: false,
    },
    {
      icon: <Clock className="h-6 w-6" />,
      label: 'Dispatched',
      date: new Date().toLocaleDateString(),
      isCompleted: false,
      isCurrent: true,
    },
    {
      icon: <Truck className="h-6 w-6" />,
      label: 'In Transit',
      date: '',
      isCompleted: false,
      isCurrent: false,
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      label: 'Delivered',
      date: '',
      isCompleted: false,
      isCurrent: false,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Order Tracking</h2>
        <p className="text-gray-600">Order #{orderNumber}</p>
        <p className="text-gray-600">Estimated Delivery: {eta}</p>
      </div>
      
      <div className="relative">
        {steps.map((step, index) => (
          <div key={step.label} className="flex items-start mb-8 last:mb-0">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
              step.isCompleted ? 'bg-green-500' : 
              step.isCurrent ? 'bg-orange-500' : 'bg-gray-200'
            } text-white`}>
              {step.icon}
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-800">{step.label}</h3>
              {step.date && <p className="text-gray-600">{step.date}</p>}
            </div>
            {index < steps.length - 1 && (
              <div className={`absolute left-5 ml-[1px] h-full w-0.5 ${
                step.isCompleted ? 'bg-green-500' : 'bg-gray-200'
              }`} style={{ top: '2rem' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryTracker;