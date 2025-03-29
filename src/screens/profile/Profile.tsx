import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { USERS } from '../../data/users';
import { POSTS } from '../../data/posts';
import { PostCard } from '../../components/PostCard';
import { UserInfo } from '../../components/UserInfo';

const Profile = () => {
  const myUser = USERS[0];
  const postsForUser = POSTS;

  return (
    <View style={styles.container}>

      <UserInfo user={myUser} />

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
  posts: {
    height: '100%',
    alignItems: 'center',
  },
});
