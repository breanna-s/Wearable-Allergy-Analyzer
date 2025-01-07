import { initializeApp } from 'firebase/app';

// Firebase configuration object
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

export default firebaseConfig;
