import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      const user = await login(formData.email, formData.password);
      const role = user?.role || 'user';
      navigate(role === 'admin' ? '/admin' : '/');
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-2">
      <div className="max-w-3xl w-full max-h-[500px] bg-white/90 backdrop-blur-md shadow-2xl rounded-xl overflow-hidden md:flex transition-all duration-300">
        
        {/* Left - Visual */}
        <div className="md:w-1/2 relative hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=500&auto=format&fit=crop&q=60"
            alt="Login Visual"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <div>
              <h2 className="text-xl font-bold text-white">Welcome Back</h2>
              <p className="text-sm text-gray-200 mt-1">
                Sign in to continue your journey with us.
              </p>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="md:w-1/2 p-4 overflow-y-auto">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800">Login</h1>
            <p className="text-gray-600 text-sm">
              New here?{' '}
              <Link to="/signup" className="text-purple-600 hover:text-purple-800 font-medium">
                Create an account
              </Link>
            </p>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded mb-3 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3 text-sm">
            {/* Email */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-400 hover:text-gray-600" />
                ) : (
                  <FaEye className="text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 rounded-md transition duration-300 flex justify-center items-center"
            >
              {loading ? (
                <>
                  <svg className="animate-spin mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Logging in...
                </>
              ) : (
                'Login'
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-3 text-center text-xs text-gray-500">
            By logging in, you agree to our{' '}
            <a href="#" className="text-purple-600 hover:text-purple-800">
              Terms
            </a>{' '}
            and{' '}
            <a href="#" className="text-purple-600 hover:text-purple-800">
              Privacy Policy
            </a>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
