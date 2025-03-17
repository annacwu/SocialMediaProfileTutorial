import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { USERS } from './src/data/users';

export default function App() {
  const myUser = USERS[0];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topInfo}>
        <View style={styles.imageColumn}>
          <View style={styles.photo}/>
        </View>
      
        <View style={styles.userInfoColumn}>
            <Text style={styles.name}>{myUser.firstName} {myUser.lastName}</Text>
            <Text style={styles.username}>@{myUser.username}</Text>
            <Text style={styles.bio}>{myUser.bio}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  topInfo: {
    height: 150,
    flexDirection: 'row' // this is what makes it go next to each
  },
  imageColumn: {
    height: '100%',
    width: '25%',
    justifyContent: 'center', // justify content does y axis (vert)
    alignItems: 'center' // align does x axis (horizontal)
  },
  userInfoColumn: {
    height: '100%',
    width: '75%',
    justifyContent: 'center',
  },
  photo: {
    height: 80,
    width: 80,
    backgroundColor: 'blue',
    borderRadius: 40, // this is what makes it circular (50 goes in the middle of each side)
  },
  name: {
    fontSize: 20,
    fontWeight: '500'
  },
  username: {
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'italic'
  },
  bio: {
    marginTop: 5,
    fontSize: 13,
    fontWeight: '300'
  }
});
