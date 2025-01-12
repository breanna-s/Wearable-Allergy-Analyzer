import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function AuthIndex() {
  const router = useRouter();

  return (
    <View>
      <Text>Welcome to the Auth Group</Text>
      <Button title="Go to Login" onPress={() => router.push('/(auth)/Login')} />
      <Button title="Go to Sign Up" onPress={() => router.push('/(auth)/SignUp')} />
    </View>
  );
}


