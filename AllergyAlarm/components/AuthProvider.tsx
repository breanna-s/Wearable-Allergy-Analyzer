import React, { useState, useEffect, createContext, useContext } from 'react';
import { getAuth, onAuthStateChanged, User, initializeAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../firebaseConfig';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Use AsyncStorage for Expo
import { getReactNativePersistence } from 'firebase/auth'; // Import getReactNativePersistence

// Create a Context for Auth State
const AuthContext = createContext<{ user: User | null }>({ user: null });

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Initialize Firebase app
    const app = initializeApp(firebaseConfig);

    // Initialize Firebase Auth with AsyncStorage for persistence
    const auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage), // Pass AsyncStorage through getReactNativePersistence
    });

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Set user when authenticated
      } else {
        setUser(null); // Clear user when not authenticated
        router.push('./app/Login'); // Optionally redirect to login if not authenticated
      }
    });

    return unsubscribe; // Cleanup listener on unmount
  }, [router]);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
