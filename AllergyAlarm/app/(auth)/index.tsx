import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter();

  const navigateToLogin = () => {
    router.push('/(auth)/Login'); // Navigate to Login page
  };

  const navigateToSignup = () => {
    router.push('/(auth)/SignUp'); // Navigate to SignUp page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App</Text>
      <Button title="Login" onPress={navigateToLogin} />
      <Button title="Sign Up" onPress={navigateToSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Index;
