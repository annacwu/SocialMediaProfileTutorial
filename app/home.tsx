import React, { useMemo } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { POSTS } from "../src/data/posts";
import { PostCard } from "../src/components/PostCard";
import { Spacing } from "../src/components/Spacing";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../src/components/Header";
import { useAppDispatch, useAppSelector } from "../src/store";
import { ContinueButton } from "../src/components/ContinueButton";
import { ButtonText } from "../src/components/ButtonText";
import { createPostThunk } from "../src/store/thunks/currentPost-thunk";

const Home = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(state => state.posts); 

    const postsToShow = useMemo(() => {
        return Object.values(posts).sort((a, b) => b.createdDate - a.createdDate);
    }, [posts]);

    console.log('postsToShow', postsToShow);

    const createPost = () => {
        dispatch(createPostThunk());
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}> 
            <Header showLogo />
            <ScrollView contentContainerStyle={styles.scrollView}>
                {postsToShow.map(post => <PostCard post={post} key={post.id} />)}

                <Spacing vertical={100} />
            </ScrollView>

            <ContinueButton child={<ButtonText text = 'Create Post'/>} onPress={createPost}/>
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