'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, loginWithGoogle } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
    } catch (err: any) {
      setError(err.message || 'Failed to sign in');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    try {
      await loginWithGoogle();
    } catch (err: any) {
      setError(err.message || 'Failed to sign in with Google');
    }
  };

  return (
    <div className="signin-page h-screen flex items-center justify-center p-8">
      <div className="card w-full max-w-[440px] space-y-8" data-reveal="scale-up">
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-[#c94a2a]"></div>
            <span className="font-syne font-bold text-[#1a0a0a]">CareerLens AI</span>
          </Link>
          <h1 className="text-3xl font-bold">Welcome back.</h1>
          <p className="text-[#8a7a72]">Enter your details to access your dashboard.</p>
        </div>

        {error && <div className="p-4 bg-red-50 text-red-600 rounded-xl text-xs">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-[#8a7a72] font-bold">Email</label>
            <input 
              type="email" 
              placeholder="name@email.com" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-xl border border-[#e2dbd3] bg-[#faf8f3] outline-none focus:border-[#c94a2a] transition-all" 
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-[#8a7a72] font-bold">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 rounded-xl border border-[#e2dbd3] bg-[#faf8f3] outline-none focus:border-[#c94a2a] transition-all" 
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className={`btn-primary w-full py-4 text-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[#e2dbd3]"></div></div>
          <div className="relative flex justify-center text-[10px] uppercase tracking-widest text-[#8a7a72]"><span className="bg-[#faf8f3] px-2">Or continue with</span></div>
        </div>

        <button 
          onClick={handleGoogleLogin}
          className="w-full p-4 rounded-xl border border-[#e2dbd3] bg-white flex items-center justify-center gap-3 hover:bg-[#faf8f3] transition-all"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          Google
        </button>

        <p className="text-center text-sm text-[#8a7a72]">
          Don't have an account? <Link href="/signup" className="text-[#c94a2a] font-bold">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
