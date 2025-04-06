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
    const userData = localStorage.getItem('userSession'); // uses correct key
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
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <UserGroups />
      {/* Show HeroSection only when not logged in */}
      {!isLoggedIn && <HeroSection />}

      {/* Show Why Choose HarvestHub always */}
      <BenefitsSection />
    </div>
    </PageWrapper>
    

  );
};

export default Home;
