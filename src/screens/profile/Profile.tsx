import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { USERS } from '../../data/users';
import { POSTS } from '../../data/posts';
import { PostCard } from '../../components/PostCard';

const Profile = () => {
  const myUser = USERS[0];
  const postsForUser = POSTS;

  return (
    <View style={styles.container}>
        {/* User info header */}
      <View style={styles.topInfo}>
        {/* Photo column */}
        <View style={styles.imageColumn}>
          <View style={styles.photo}/>
        </View>

        {/* User Info column */}
        <View style={styles.userInfoColumn}>
            <Text style={styles.name}>{myUser.firstName} {myUser.lastName}</Text>
            <Text style={styles.username}>@{myUser.username}</Text>
            <Text style={styles.bio}>{myUser.bio}</Text>
        </View>
      </View>

      {/* Previous Posts */}
      <View style={styles.posts}>
        {postsForUser.map(post => <PostCard post={post} key={post.id} />)}
      </View>
    </View>
  );
};

export default Profile;

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
  },
  posts: {
    height: '100%',
    alignItems: 'center',
  },
});
