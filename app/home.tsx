import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { POSTS } from "../src/data/posts";
import { PostCard } from "../src/components/PostCard";

const Home = () => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                {POSTS.map(post => <PostCard post={post} key={post.id}/>)}
            </ScrollView>
        </View>
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