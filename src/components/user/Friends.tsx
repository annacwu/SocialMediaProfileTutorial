import React, { useMemo } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Spacing } from "../Spacing";
import { useAppSelector } from "../../store";


type Props = {
    isActive: boolean;
};

export const Friends = (props: Props) => {
    const {isActive} = props;

    const user = useAppSelector((state) => state.user);
    const friendships = useAppSelector((state) => state.friendships);

    const friendshipsForUser = useMemo(() => {
        return Object.values(friendships).filter(a => a.users.includes(user.id));
    }, [friendships]);

    if (!isActive) {
        return null;
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
            <Text>FRIENDS</Text>
            {friendshipsForUser.map(friendship => {
                return (
                    <View>
                        <Text>{friendship.id}</Text>
                    </View>
                );
            })}

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