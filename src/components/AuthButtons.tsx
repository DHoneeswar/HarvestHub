import React from 'react';
import { Link } from 'react-router-dom';

const AuthButtons: React.FC = () => {
  return (
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
  );
};

export default AuthButtons;
