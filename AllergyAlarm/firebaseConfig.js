import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, browserLocalPersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyARH4natEQIIBvjYWimBVplHn8IQXspG9g",
  authDomain: "wearable-allergy-alarm.firebaseapp.com",
  projectId: "wearable-allergy-alarm",
  storageBucket: "wearable-allergy-alarm.appspot.com",
  messagingSenderId: "73666410602",
  appId: "1:73666410602:ios:4b68ce6b34358045427213"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage for persistence
const auth = initializeAuth(app, {
  persistence: browserLocalPersistence, // Use AsyncStorage for persistence
});

export { auth };

// You can export the firebaseConfig if you need it in other parts of your app
export default firebaseConfig;
