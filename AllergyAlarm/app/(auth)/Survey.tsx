import { Text, View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function SurveyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Survey screen</Text>
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
  },
});