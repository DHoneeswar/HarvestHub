import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { AnimatePresence } from 'framer-motion';
import SmartCropRecommendation from './pages/SmartCropRecommendations';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        <Header />
        <Routes>
        
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/farmers" element={<FarmersPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/contract-farming" element={<ContractFarming />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/recommendations" element={<SmartCropRecommendation />} />
        </Routes>
        </AnimatePresence>
      </div>
      
    </Router>
  );
}

export default App;