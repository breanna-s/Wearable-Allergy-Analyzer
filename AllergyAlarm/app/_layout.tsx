import React, { useEffect } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import AuthProvider from '@/components/AuthProvider';
import { useColorScheme } from '@/hooks/useColorScheme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  initializeApp(firebaseConfig);
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);


  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          {/* Ensure the paths are correct for your screens */}
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)/Login" options={{ title: 'Login' }} />
          <Stack.Screen name="(auth)/SignUp" options={{ title: 'Sign Up' }} />
          <Stack.Screen name="(auth)/Survey" options={{ title: 'Survey' }} />
          {/* No need to include +not-found unless you're expecting specific 404 handling */}
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </AuthProvider>
  );
}
