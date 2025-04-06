import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ProductFilters from '../components/marketplace/ProductFilters';
import DeliveryTracker from '../components/delivery/DeliveryTracker';
import SubscriptionCard from '../components/subscription/SubscriptionCard';
import SustainabilityChart from '../components/sustainability/SustainabilityChart';
import { products } from '../data/products';
import { useCart } from '../hooks/useCart';
import type { FilterOption, SortOption, Product } from '../types/marketplace';
import PageWrapper from '../components/PageWrapper';
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from '../components/animations/MotionWrappers';

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

// ✅ Page transition animation
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, when: 'beforeChildren', staggerChildren: 0.1 },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
};

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

    if (filter !== 'all') {
      filtered = filtered.filter(product => {
        if (filter === 'organic') return product.isOrganic;
        if (filter === 'seasonal') return product.season === currentSeason;
        return product.category.toLowerCase().includes(filter);
      });
    }

    return filtered.sort((a, b) => {
      switch (sort) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        default: return a.name.localeCompare(b.name);
      }
    });
  }, [products, filter, sort, currentSeason]);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'marketplace':
        return (
          <FadeIn key="marketplace" delay={0.1}>
            <ProductFilters
              filter={filter}
              sort={sort}
              onFilterChange={setFilter}
              onSortChange={setSort}
            />
            <div className="mt-8">
              <StaggerContainer delay={0.2}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredAndSortedProducts.map((product) => (
                    <StaggerItem key={product.id}>
                      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="h-48 overflow-hidden relative">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                          {product.isOrganic && (
                            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                              Organic
                            </span>
                          )}
                          {product.season && (
                            <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                              {product.season}
                            </span>
                          )}
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-start">
                            <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                            <div className="flex items-center">
                              <span className="text-yellow-400">★</span>
                              <span className="ml-1 text-gray-600">{product.rating}</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                          <div className="flex justify-between items-center mt-4">
                            <span className="text-lg font-bold text-orange-600">₹{product.price}/{product.unit}</span>
                            <button
                              onClick={() => handleAddToCart(product)}
                              className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-full text-sm transition-colors duration-300"
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            </div>
          </FadeIn>
        );
      case 'delivery':
        return (
          <FadeIn key="delivery">
            <div className="max-w-3xl mx-auto">
              <DeliveryTracker />
            </div>
          </FadeIn>
        );
      case 'subscription':
        return (
          <FadeIn key="subscription">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {subscriptionPlans.map((plan) => (
                <StaggerItem key={plan.title}>
                  <SubscriptionCard {...plan} />
                </StaggerItem>
              ))}
            </div>
          </FadeIn>
        );
      case 'sustainability':
        return (
          <FadeIn key="sustainability">
            <div className="max-w-4xl mx-auto">
              <SustainabilityChart />
            </div>
          </FadeIn>
        );
      default:
        return null;
    }
  };

  return (
    <PageWrapper>
      <motion.div
        className="min-h-screen bg-gray-50"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <PageHero
          title="Fresh from Farm to Your Table"
          description="Support local farmers and enjoy farm-fresh products delivered to your doorstep"
          image="https://images.unsplash.com/photo-1488459716781-31db52582fe9"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between items-center mb-8"
          >
            <Link to="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors duration-200">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            {totalItems > 0 && (
              <motion.span
                className="bg-orange-500 text-white px-3 py-1 rounded-full"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                Cart: {totalItems} items
              </motion.span>
            )}
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {['marketplace', 'delivery', 'subscription', 'sustainability'].map((section) => (
              <motion.button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-6 py-2 rounded-full capitalize transition-colors duration-300 ${
                  activeSection === section
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-600 hover:bg-orange-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            {renderSectionContent()}
          </AnimatePresence>
        </div>
      </motion.div>
    </PageWrapper>
  );
};

export default CustomersPage;
