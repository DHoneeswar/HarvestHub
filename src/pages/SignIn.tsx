import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const savedUser = localStorage.getItem('userAccount');

    if (!savedUser) {
      setError('No user account found. Please sign up first.');
      return;
    }

    const parsedUser = JSON.parse(savedUser);
    const { username, password } = formData;

    if (
      username === parsedUser.username &&
      password === parsedUser.password
    ) {
      localStorage.setItem('userSession', JSON.stringify(parsedUser));
      navigate('/');
    } else {
      setError('Incorrect username or password.');
    }
  };

  return (
    <PageWrapper>
      <div className="flex justify-center items-center h-screen bg-green-50 dark:bg-gray-900 transition-colors">
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm transition-colors"
        >
          <h2 className="text-2xl font-bold mb-6 text-green-600 dark:text-green-400">Sign In</h2>

          {error && (
            <p className="text-red-500 dark:text-red-400 mb-4" role="alert">
              {error}
            </p>
          )}

          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </PageWrapper>
  );
};

export default SignIn;
