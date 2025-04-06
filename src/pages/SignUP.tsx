import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear error on input change
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { username, password } = formData;

    if (!username || !password) {
      setError('All fields are required.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    const existingUser = localStorage.getItem('userAccount');
    if (existingUser) {
      const parsed = JSON.parse(existingUser);
      if (parsed.username === username) {
        setError('Username already exists. Please choose a different one.');
        return;
      }
    }

    const user = { username, password };

    try {
      localStorage.setItem('userAccount', JSON.stringify(user));
      localStorage.setItem('userSession', JSON.stringify(user));
      navigate('/');
    } catch (err) {
      console.error('Failed to save user:', err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <PageWrapper>
      <div className="flex justify-center items-center h-screen bg-green-50 dark:bg-gray-900 transition-colors">
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold mb-6 text-green-600 dark:text-green-400">Sign Up</h2>

          {error && <p className="text-red-500 dark:text-red-400 mb-4" role="alert">{error}</p>}

          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Enter a username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter a password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </PageWrapper>
  );
};

export default SignUp;
