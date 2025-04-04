import React from 'react';
import { CreditCard, Shield, Calculator } from 'lucide-react';

const FinancialManagement = () => {
  const loans = [
    {
      type: 'Equipment Loan',
      amount: '₹500,000',
      interest: '8.5%',
      period: '36 months',
    },
    {
      type: 'Crop Loan',
      amount: '₹200,000',
      interest: '7%',
      period: '12 months',
    },
  ];

  const insurances = [
    {
      type: 'Crop Insurance',
      coverage: '₹1,000,000',
      premium: '₹2,500/month',
      features: ['Natural disasters', 'Pest damage', 'Market price protection'],
    },
    {
      type: 'Equipment Insurance',
      coverage: '₹500,000',
      premium: '₹1,500/month',
      features: ['Accident coverage', 'Theft protection', 'Maintenance support'],
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Microcredits Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-2 mb-6">
          <CreditCard className="h-6 w-6 text-green-600" />
          <h3 className="text-xl font-semibold text-gray-800">Available Loans</h3>
        </div>
        <div className="space-y-4">
          {loans.map((loan) => (
            <div key={loan.type} className="border rounded-lg p-4 hover:border-green-500 transition-colors">
              <h4 className="text-lg font-medium text-gray-800 mb-2">{loan.type}</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Amount</p>
                  <p className="font-medium">{loan.amount}</p>
                </div>
                <div>
                  <p className="text-gray-600">Interest Rate</p>
                  <p className="font-medium">{loan.interest}</p>
                </div>
                <div>
                  <p className="text-gray-600">Period</p>
                  <p className="font-medium">{loan.period}</p>
                </div>
              </div>
              <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Insurance Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-2 mb-6">
          <Shield className="h-6 w-6 text-green-600" />
          <h3 className="text-xl font-semibold text-gray-800">Insurance Plans</h3>
        </div>
        <div className="space-y-4">
          {insurances.map((insurance) => (
            <div key={insurance.type} className="border rounded-lg p-4 hover:border-green-500 transition-colors">
              <h4 className="text-lg font-medium text-gray-800 mb-2">{insurance.type}</h4>
              <div className="space-y-2">
                <div>
                  <p className="text-gray-600">Coverage</p>
                  <p className="font-medium">{insurance.coverage}</p>
                </div>
                <div>
                  <p className="text-gray-600">Premium</p>
                  <p className="font-medium">{insurance.premium}</p>
                </div>
                <div>
                  <p className="text-gray-600">Features</p>
                  <ul className="list-disc list-inside text-sm">
                    {insurance.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors">
                Get Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancialManagement;