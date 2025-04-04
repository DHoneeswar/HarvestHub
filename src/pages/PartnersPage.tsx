import React from 'react';
import { ArrowLeft, Building2, Coins, BarChart3, Truck, HandshakeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import FeatureCard from '../components/FeatureCard';

const features = [
  {
    title: 'Product Catalog',
    description: 'Showcase your agricultural products and services to farmers.',
    icon: Building2,
    link: '#catalog'
  },
  {
    title: 'Microcredit Platform',
    description: 'Offer tailored financial solutions for farming needs.',
    icon: Coins,
    link: '#microcredit'
  },
  {
    title: 'Market Analytics',
    description: 'Access data-driven insights on regional and seasonal demand.',
    icon: BarChart3,
    link: '#analytics'
  },
  {
    title: 'Distribution Network',
    description: 'Manage logistics and optimize product distribution.',
    icon: Truck,
    link: '#distribution'
  },
  {
    title: 'Partnership Hub',
    description: 'Collaborate with farming communities for sustainable growth.',
    icon: HandshakeIcon,
    link: '#partnerships'
  }
];

const PartnersPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero 
        title="Supporting Agricultural Growth"
        description="Partner with farmers and drive innovation in agriculture"
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-700 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              link={feature.link}
              theme="gray"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;