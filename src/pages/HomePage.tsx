import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitSection';
import FeaturesSection from '../components/Features';
import UserGroupSection from '../components/UserGroups';
import Hero from '../components/Hero';
import ChatAI from '../pages/Chat';

const Home: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('userSession');
    try {
      const user = userData ? JSON.parse(userData) : null;
      setIsLoggedIn(!!(user && user.username));
    } catch (error) {
      console.error('Invalid userSession in localStorage', error);
      setIsLoggedIn(false);
    }
    
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {!isLoggedIn ? (
        <>
          
          <HeroSection />
          <BenefitsSection />
        </>
      ) : (
        <>
          <Hero />
          <FeaturesSection />
          <UserGroupSection />
          <ChatAI />
        </>
      )}
    </div>
  );
};

export default Home;
