import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { POSTS } from "../src/data/posts";
import { PostCard } from "../src/components/PostCard";
import { Spacing } from "../src/components/Spacing";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../src/components/Header";

const Home = () => {
    return (
        <SafeAreaView style={styles.container} edges={['top']}> 
            <Header showLogo />
            <ScrollView contentContainerStyle={styles.scrollView}>
                {POSTS.map(post => <PostCard post={post} key={post.id} />)}

                <Spacing vertical={100} />
            </ScrollView>
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