import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import DashboardOverview from '../components/farmers/DashboardOverview';
import ResourceMarketplace from '../components/farmers/ResourceMarketplace';
import KnowledgeHub from '../components/farmers/KnowledgeHub';
import FinancialManagement from '../components/farmers/FinancialManagement';
import AISolutions from '../components/farmers/AISolutions';
import PageWrapper from '../components/PageWrapper';


const FarmersPage = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const sections = [
    { id: 'dashboard', label: 'Dashboard Overview' },
    { id: 'marketplace', label: 'Resource Marketplace' },
    { id: 'knowledge', label: 'Knowledge Hub' },
    { id: 'financial', label: 'Financial Management' },
    { id: 'ai', label: 'AI Solutions' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'marketplace':
        return <ResourceMarketplace />;
      case 'knowledge':
        return <KnowledgeHub />;
      case 'financial':
        return <FinancialManagement />;
      case 'ai':
        return <AISolutions />;
      default:
        return null;
    }
  };

  return (
    <PageWrapper>
    <div className="min-h-screen bg-gray-50">
      <PageHero 
        title="Empowering Farmers"
        description="Access modern tools, connect with buyers, and grow sustainably"
        image="https://images.unsplash.com/photo-1625246333195-78d9c38ad449"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>

        <div className="flex flex-wrap gap-4 mb-8">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-6 py-2 rounded-lg transition-colors ${
                activeSection === section.id
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-green-50'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {renderContent()}
        </div>
      </div>
    </div>
    </PageWrapper>
  );
};

export default FarmersPage;