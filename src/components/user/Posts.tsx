import React, { useMemo } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { Spacing } from "../Spacing";
import { useAppSelector } from "../../store";
import { PostCard } from "../PostCard";


type Props = {
    isActive: boolean;
};

export const Posts = (props: Props) => {
    const {isActive} = props;

    const currentUser = useAppSelector(state => state.currentUser);
    const posts = useAppSelector(state => state.posts);

    const postsForUser = useMemo(() => {
        return Object.values(posts).filter(post => post.user === currentUser.id).sort((a,b) => b.createdDate - a.createdDate);
    }, []);

    if (!isActive) {
        return null;
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
            {postsForUser.map(post => <PostCard post={post} key={post.id} />)}

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