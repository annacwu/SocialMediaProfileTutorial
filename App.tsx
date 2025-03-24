import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { USERS } from './src/data/users';
import Profile from './src/screens/profile/Profile';

const App = () => {
  const myUser = USERS[0];

  return (
    <SafeAreaView style={styles.container}>
      <Profile />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
