import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../src/store";
import { router } from 'expo-router';
import { USERS } from "../src/data/users";
import { CurrentUserActions } from "../src/store/features/currentUser";
import { ROUTES } from "../src/routes";
import { Header } from "../src/components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

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
        <SafeAreaView style={styles.safeAreaView} edges={['top']}> 
            <Header 
                leftButton={{
                    onPress: goBack
                }}
                showLogo
            />

            <View style={styles.main}>
                <TouchableOpacity onPress={goToUserDetailPage}>
                    <Text>{userInfo?.firstName}</Text>
                </TouchableOpacity>
            
                <Text>{currentPost.text}</Text>
            </View>
            
        </SafeAreaView>
    );
};

export default PostDetailPage;

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },            
    main: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10
    }
});