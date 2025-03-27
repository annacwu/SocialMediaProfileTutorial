import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { POSTS } from "../src/data/posts";
import { PostCard } from "../src/components/PostCard";
import { SafeAreaView } from "react-native";
import { Spacing } from "../src/components/Spacing";

const Home = () => {
    return (
        <SafeAreaView style={styles.container}> {/* edges={['top', 'left', 'right']} should change where it is applied */}
            <ScrollView contentContainerStyle={styles.scrollView}>
                {POSTS.map(post => <PostCard post={post} key={post.id} />)}
            </ScrollView>

            <Spacing vertical={100} />
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        alignItems: 'center',
    }
})