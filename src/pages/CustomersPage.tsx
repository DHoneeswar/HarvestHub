import React, { useState, useMemo } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ProductFilters from '../components/marketplace/ProductFilters';
import ProductGrid from '../components/marketplace/ProductGrid';
import DeliveryTracker from '../components/delivery/DeliveryTracker';
import SubscriptionCard from '../components/subscription/SubscriptionCard';
import SustainabilityChart from '../components/sustainability/SustainabilityChart';
import { products } from '../data/products';
import { useCart } from '../hooks/useCart';
import type { FilterOption, SortOption, Product } from '../types/marketplace';
import PageWrapper from '../components/PageWrapper';


const subscriptionPlans = [
  {
    title: 'Monthly Plan',
    price: 400,
    period: 'month',
    benefits: [
      'Weekly fresh produce delivery',
      '10% off on all products',
      'Free delivery',
      'Cancel anytime',
    ],
  },
  {
    title: 'Annual Plan',
    price: 5000,
    period: 'year',
    benefits: [
      'Weekly fresh produce delivery',
      '15% off on all products',
      'Free priority delivery',
      'Exclusive seasonal boxes',
      'Early access to new products',
    ],
    isPopular: true,
  },
];

const CustomersPage = () => {
  const [activeSection, setActiveSection] = useState('marketplace');
  const [filter, setFilter] = useState<FilterOption>('all');
  const [sort, setSort] = useState<SortOption>('name');
  const { addToCart, totalItems } = useCart();

  const currentSeason = useMemo(() => {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) return 'Spring';
    if (month >= 5 && month <= 7) return 'Summer';
    if (month >= 8 && month <= 10) return 'Fall';
    return 'Winter';
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Apply filters
    if (filter !== 'all') {
      filtered = filtered.filter(product => {
        if (filter === 'organic') return product.isOrganic;
        if (filter === 'seasonal') return product.season === currentSeason;
        return product.category.toLowerCase().includes(filter);
      });
    }

    // Apply sorting
    return filtered.sort((a, b) => {
      switch (sort) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [products, filter, sort, currentSeason]);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <PageWrapper>
    <div className="min-h-screen bg-gray-50">
      <PageHero 
        title="Fresh from Farm to Your Table"
        description="Support local farmers and enjoy farm-fresh products delivered to your doorstep"
        image="https://images.unsplash.com/photo-1488459716781-31db52582fe9"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="inline-flex items-center text-orange-600 hover:text-orange-700">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          {totalItems > 0 && (
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full">
              Cart: {totalItems} items
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          {['marketplace', 'delivery', 'subscription', 'sustainability'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-6 py-2 rounded-full capitalize ${
                activeSection === section
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-orange-50'
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {activeSection === 'marketplace' && (
          <>
            <ProductFilters
              filter={filter}
              sort={sort}
              onFilterChange={setFilter}
              onSortChange={setSort}
            />
            <ProductGrid
              products={filteredAndSortedProducts}
              onAddToCart={handleAddToCart}
            />
          </>
        )}

        {activeSection === 'delivery' && (
          <div className="max-w-3xl mx-auto">
            <DeliveryTracker />
          </div>
        )}

        {activeSection === 'subscription' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {subscriptionPlans.map((plan) => (
              <SubscriptionCard key={plan.title} {...plan} />
            ))}
          </div>
        )}

        {activeSection === 'sustainability' && (
          <div className="max-w-4xl mx-auto">
            <SustainabilityChart />
          </div>
        )}
      </div>
    </div>
    </PageWrapper>
  );
};

export default CustomersPage;