import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import FarmersPage from './pages/FarmersPage';
import CustomersPage from './pages/CustomersPage';
import PartnersPage from './pages/PartnersPage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ContractFarming from './components/ContractFarming';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUP';

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/farmers" element={<FarmersPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/contract-farming" element={<ContractFarming />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const root = document.documentElement;

    if (savedTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
