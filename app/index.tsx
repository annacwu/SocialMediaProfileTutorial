import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from 'expo-router';

export default function Page() {

  const goToHome = () => {
    router.push('home/');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.main} onPress={goToHome}>
        <Text style={styles.title}>Go to home screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
