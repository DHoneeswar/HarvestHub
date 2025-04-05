import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';


const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Form Submitted with:', formData); // 🔍 Debug: check if called

    if (!formData.username || !formData.password) {
      setError('All fields are required');
      return;
    }

    const user = {
      username: formData.username,
      password: formData.password,
    };

    console.log('Saving user to localStorage:', user); // 🔍 Debug

    try {
        localStorage.setItem('userAccount', JSON.stringify(user));
        localStorage.setItem('userSession', JSON.stringify(user)); // Also log them in immediately
        
      console.log('User saved! ✅'); // 🔍 Confirm saved
    } catch (err) {
      console.error('Error saving user:', err); // 🔴 Show error if failed
    }

    navigate('/'); // redirect after successful signup
  };

  return (
    <PageWrapper>
    <div className="flex justify-center items-center h-screen bg-green-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-green-600">Sign Up</h2>

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
          Sign Up
        </button>
      </form>
    </div>
    </PageWrapper>
  );
};

export default SignUp;
