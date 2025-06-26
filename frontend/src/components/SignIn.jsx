import { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', form);

      // ✅ Store the JWT token
      localStorage.setItem('token', res.data.token);

      // ✅ Redirect to dashboard/homepage
      navigate('/');
    } catch (err) {
      console.error('Login Error:', err);
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow-lg w-80 space-y-4">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded bg-gray-700"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 rounded bg-gray-700"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button type="submit" className="w-full bg-blue-500 py-2 rounded hover:bg-blue-600">
          Login
        </button>
        <p className="text-sm text-center text-gray-400">
          New here? <a href="/signup" className="text-blue-400 underline">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
