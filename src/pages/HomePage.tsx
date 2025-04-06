import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitSection';
import Hero from '../components/Hero';
import Features from '../components/Features';
import UserGroups from '../components/UserGroups';
import PageWrapper from '../components/PageWrapper';

const Home: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('userSession');
    try {
      const user = userData ? JSON.parse(userData) : null;
      if (user && user.username) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('Invalid userSession in localStorage', error);
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <PageWrapper>
      {/* ✅ Added dark mode, text color and transition support */}
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Hero />
        <Features />
        <UserGroups />

        {/* Only show when not logged in */}
        {!isLoggedIn && <HeroSection />}

        {/* Always visible */}
        <BenefitsSection />
      </div>
    </PageWrapper>
  );
};

export default Home;
