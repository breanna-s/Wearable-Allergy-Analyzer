import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  // Function to navigate to the survey screen
  const navigateToSurvey = () => {
    router.push('/Survey'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    width: 'auto',
    height: 50,
    backgroundColor: '#FD98A9', // Same pink button style
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  buttonText: {
    color: '#f1fffa',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
