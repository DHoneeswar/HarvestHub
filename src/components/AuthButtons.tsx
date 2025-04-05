import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';


const AuthButtons: React.FC = () => {
  return (
    <PageWrapper>
    <div className="flex space-x-4">
      <Link to="/signin">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Sign In
        </button>
      </Link>

      <Link to="/signup">
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
          Sign Up
        </button>
      </Link>
    </div>
    </PageWrapper>
  );
};

export default AuthButtons;
