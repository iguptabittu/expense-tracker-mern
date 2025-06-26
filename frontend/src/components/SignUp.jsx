import { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/auth/register', form);
    alert('Registered! Please sign in.');
    navigate('/signin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow-lg w-80 space-y-4">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <input
          type="email" placeholder="Email" required
          className="w-full p-2 rounded bg-gray-700"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password" placeholder="Password" required
          className="w-full p-2 rounded bg-gray-700"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit" className="w-full bg-blue-500 py-2 rounded hover:bg-blue-600">
          Register
        </button>
        <p className="text-sm text-center text-gray-400">
          Already have an account? <a href="/signin" className="text-blue-400 underline">Sign in</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
