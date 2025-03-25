import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Post } from "../src/model/post";
import { useAppSelector } from "../src/store";
import { currentPost } from "../src/store/features/currentPost";
import { router } from 'expo-router';

const PostDetailPage = () => {
    const currentPost = useAppSelector(state => state.currentPost);

    const goBack = () => {
        router.back();
    };

    return (
        <SafeAreaView>
            <Text>Post Detail Page</Text>
            <Text>{currentPost.text}</Text>

            <TouchableOpacity onPress={goBack}>
                <Text>go back</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default PostDetailPage;