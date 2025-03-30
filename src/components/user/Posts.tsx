import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { Spacing } from "../Spacing";


type Props = {
    isActive: boolean;
};

export const Posts = (props: Props) => {
    const {isActive} = props;

    if (!isActive) {
        return null;
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
            <Text>POSTS</Text>
            {/* {POSTS.map(post => <PostCard post={post} key={post.id} />)} */}

            <Spacing vertical={100} />
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    scrollView: {},
    scrollViewContentContainer: {
        alignItems: 'center',
    },
})