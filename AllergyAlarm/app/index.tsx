import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const Separator = () => <View style={styles.separator} />;

const Index = () => {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>Welcome to the Auth Group</Text>
        </View>
        <Separator />
        <View style={styles.fixToText}>
          <Button title="Log In"
           color='#FDBAC1' 
           onPress={() => router.push('/(auth)/Login')} />
        </View>
        <View style={styles.fixToText}>
          <Button title="Sign Up" 
           color='#FDBAC1'
           onPress={() => router.push('/(auth)/SignUp')} />
        </View>
        {/* </View> */}
      </SafeAreaView> 
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    marginVertical: 10,
  },
  title: {
    color: '#555555',
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
   // flexDirection: 'row',
    color: '#FDBAC1',
    marginVertical:10,
    paddingHorizontal: 75,
    textAlign: 'center',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Index;
