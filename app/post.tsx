import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Post } from "../src/model/post";
import { useAppDispatch, useAppSelector } from "../src/store";
import { currentPost } from "../src/store/features/currentPost";
import { router } from 'expo-router';
import { USERS } from "../src/data/users";
import { CurrentUserActions } from "../src/store/features/currentUser";
import { ROUTES } from "../src/routes";
import { Header } from "../src/components/Header";

const PostDetailPage = () => {
const dispatch = useAppDispatch();

    const currentPost = useAppSelector(state => state.currentPost);
    const userInfo = USERS.find(user => user.id === currentPost.user);

    const goBack = () => {
        router.back();
    };

    const goToUserDetailPage = () => {
        dispatch(CurrentUserActions.setCurrentUser(userInfo));

        router.push(ROUTES.USER);
    };

    return (
        <SafeAreaView>
            <Header 
                leftButton={{
                    child: <Image source={require('../assets/back.png')} style={styles.backImage} />,
                    onPress: goBack
                }}
                rightButton={{
                    child: <Image source={require('../assets/back.png')} style={styles.backImage} />,
                    onPress: goBack
                }}
                showLogo
            />
            <TouchableOpacity onPress={goBack}>
                <Text>go back</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToUserDetailPage}>
                <Text>USER A</Text>
            </TouchableOpacity>

            <Text>{currentPost.text}</Text>
            
        </SafeAreaView>
    );
};

export default PostDetailPage;

const styles = StyleSheet.create({
    backImage: {
        height: 20,
        width: 20,
    },
});