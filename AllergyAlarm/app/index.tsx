import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { getAuth, signOut } from 'firebase/auth';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const Separator = () => <View style={styles.separator} />;

// const attemptSignOut = () => {
//   try {
//     signOut();

//   }
// };

const Index = () => {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome back!</Text>

          <Separator />

          <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/(auth)/Login')}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/(auth)/SignUp')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView> 
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#dadada',
    margin: 10,
    //textAlign: 'center',
  },
  buttonContainer: {
    width: 'auto',
    height: 'auto',
    minHeight: 50,
    minWidth: 100,
    backgroundColor: '#FD98A9', // Pink button
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 30,
    marginBottom: 10,
  },
  buttonText: {
    color: '#f1fffa',
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    borderColor: 'f1fffa',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Index;
