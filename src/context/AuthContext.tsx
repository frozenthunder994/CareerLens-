'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { 
  User, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  signInWithPopup,
  updateProfile
} from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, pass: string) => Promise<void | { user: null; error: string }>;
  signup: (email: string, pass: string, name: string) => Promise<void | { user: null; error: string }>;
  logout: () => Promise<void>;
  loginWithGoogle: () => Promise<void | { user: null; error: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const login = async (email: string, pass: string) => {
    // Add this check at the start of every auth function
    if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
      return { 
        user: null, 
        error: 'Authentication service is not configured. Please contact support.' 
      }
    }
    await signInWithEmailAndPassword(auth, email, pass);
    router.push('/dashboard');
  };

  const signup = async (email: string, pass: string, name: string) => {
    // Add this check at the start of every auth function
    if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
      return { 
        user: null, 
        error: 'Authentication service is not configured. Please contact support.' 
      }
    }
    const res = await createUserWithEmailAndPassword(auth, email, pass);
    if (res.user) {
      await updateProfile(res.user, { displayName: name });
    }
    router.push('/dashboard');
  };

  const logout = async () => {
    await signOut(auth);
    router.push('/');
  };

  const loginWithGoogle = async () => {
    // Add this check at the start of every auth function
    if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
      return { 
        user: null, 
        error: 'Authentication service is not configured. Please contact support.' 
      }
    }
    await signInWithPopup(auth, googleProvider);
    router.push('/dashboard');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, loginWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
