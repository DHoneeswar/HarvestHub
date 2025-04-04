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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/farmers" element={<FarmersPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/contract-farming" element={<ContractFarming />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;