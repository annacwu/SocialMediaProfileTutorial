import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { User } from "../../model/user";
import { ManageFriendshipButton } from "../ManageFriendshipButton";
import { useAppSelector } from "../../store";

type Props = {
    user: User;
};

export const UserInfo = (props: Props) => {
    const {user} = props;

    const loggedInUser = useAppSelector((state) => state.user);

    return (
        <View style={styles.topInfo}>
            {/* Photo column */}
            <View style={styles.imageColumn}>
            <View style={styles.photo}/>
            </View>

            {/* User Info column */}
            <View style={styles.userInfoColumn}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.username}>@{user.username}</Text>
                <Text style={styles.bio}>{user.bio}</Text>
            </View>

            {/* Manage Friendship */}
            <View style={styles.friendshipButton}>
              {loggedInUser.id != user.id && (
                <ManageFriendshipButton otherUser={user} />
              )}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    topInfo: {
        height: 100,
        flexDirection: 'row' // this is what makes it go next to each
      },
      imageColumn: {
        height: '100%',
        width: '25%',
        justifyContent: 'center', // justify content does y axis (vert)
        alignItems: 'center' // align does x axis (horizontal)
      },
      userInfoColumn: {
        height: '100%',
        width: '75%',
        justifyContent: 'center',
      },
      photo: {
        height: 80,
        width: 80,
        backgroundColor: 'blue',
        borderRadius: 40, // this is what makes it circular (50 goes in the middle of each side)
      },
      name: {
        fontSize: 20,
        fontWeight: '500'
      },
      username: {
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'italic'
      },
      bio: {
        marginTop: 5,
        fontSize: 13,
        fontWeight: '300'
      },
      friendshipButton: {
        position: 'absolute',
        top: 10,
        right: 10
      },
});