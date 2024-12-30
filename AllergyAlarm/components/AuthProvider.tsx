// components/AuthProvider.tsx
import React, { useState, useEffect, createContext, useContext } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { useRouter } from 'expo-router';

// Create a Context for Auth State
const AuthContext = createContext<{ user: User | null }>({ user: null });

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
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
