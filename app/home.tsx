import React, { useMemo } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { PostCard } from "../src/components/PostCard";
import { Spacing } from "../src/components/Spacing";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../src/components/Header";
import { useAppDispatch, useAppSelector } from "../src/store";
import { ButtonText } from "../src/components/ButtonText";
import { PRIMARY } from "../src/utils/colors";
import { PostBuilderActions } from "../src/store/features/postBuilder";
import { CurrentPostActions } from "../src/store/features/currentPost";
import { ROUTES } from "../src/routes";
import { auth } from "../firebaseConfig";
import { router } from "expo-router";

const Home = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(state => state.posts); 

    const postsToShow = useMemo(() => {
        return Object.values(posts).sort((a, b) => b.createdDate - a.createdDate);
    }, [posts]);

    const createPost = () => {
        dispatch(CurrentPostActions.reset());
        dispatch(PostBuilderActions.setIsPostModalOpen(true));
    };

    const signOut = () => {
        auth.signOut();
        router.replace(ROUTES.SIGN_UP); 
    };

    const goToProfile = () => {
        router.push(ROUTES.MY_PROFILE);
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}> 
            <Header 
            leftButton={{
                child: <Text>Profile</Text>,
                onPress: goToProfile,
            }}
            showLogo 
            rightButton={{
                child: <Text>Sign Out</Text>,
                onPress: signOut,
                }}
            />
            <ScrollView contentContainerStyle={styles.scrollViewConentContainer} showsVerticalScrollIndicator={false}>
                {postsToShow.map(post => <PostCard post={post} key={post.id} />)}

                <Spacing vertical={100} />
            </ScrollView>

            <TouchableOpacity style={styles.createPostButton} onPress={createPost}>
                <ButtonText text="+"/>
            </TouchableOpacity>


        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {},
    scrollViewConentContainer: {
        alignItems: 'center',
    },
    createPostButton: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
    },
});