import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button title="Login" onPress={() => router.push('/(auth)/Login')} />
      <Button title="Sign Up" onPress={() => router.push('/(auth)/SignUp')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the full height of the screen
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: '#000', // Black background for consistency
  },
  button: {
    marginVertical: 10, // Add spacing between buttons
  },
});

export default Index;
