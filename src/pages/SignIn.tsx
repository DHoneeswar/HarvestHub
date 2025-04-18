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
    <div className="flex justify-center items-center h-screen bg-green-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-green-600">Sign In</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-6 px-4 py-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Sign In
        </button>
      </form>
    </div>
    </PageWrapper>
  );
};

export default SignIn;
