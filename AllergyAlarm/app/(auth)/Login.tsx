import React, { useState, useEffect } from 'react';
import { TextInput, Button, Text, View, StyleSheet } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'expo-router';
import { useAuth } from '@/components/AuthProvider';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { user } = useAuth();

  // Redirect if user is already authenticated
  useEffect(() => {
    if (user) {
      router.push('/'); // Navigate to the home screen if already logged in
    }
  }, [user, router]);

  const handleLogin = async () => {
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/'); // Navigate to the home screen after successful login
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message); 
      } else {
        setError('An unknown error occurred'); 
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Login;
