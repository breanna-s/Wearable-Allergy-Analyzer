import React, { useState, useEffect, createContext, useContext } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, User, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { useRouter } from 'expo-router';
import firebaseConfig from '../firebaseConfig';

// Create a Context for Auth State
const AuthContext = createContext<{ user: User | null }>({ user: null });

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Initialize Firebase app
    const app = initializeApp(firebaseConfig);

    // Initialize Firebase Auth with AsyncStorage persistence
    const auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage) // Set persistence to AsyncStorage
    });

    // Listen for auth state changes
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Set user when authenticated
      } else {
        setUser(null); // Clear user when not authenticated
        router.push('./app/Login'); // Optionally redirect to login if not authenticated
      }
    });
  }, [router]);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
