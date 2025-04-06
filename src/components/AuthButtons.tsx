import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

const AuthButtons: React.FC = () => {
  return (
    <PageWrapper>
      <div className="flex space-x-4 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md dark:shadow-none transition-colors">
        <Link to="/signin">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-500 transition">
            Sign In
          </button>
        </Link>

        <Link to="/signup">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 dark:hover:bg-green-500 transition">
            Sign Up
          </button>
        </Link>
      </div>
    </PageWrapper>
  );
};

export default AuthButtons;
