import React, { useMemo } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useAppDispatch, useAppSelector } from "../store";
import { User } from "../model/user";
import { PRIMARY } from "../utils/colors";
import { createFriendshipThunk } from "../store/thunks/friendships-thunk";
import { FRIENDSHIP_STATUS } from "../model/friendship";
import { Friends } from "./user/Friends";

type Props = {
    otherUser: User;
};

export const ManageFriendshipButton = (props: Props) => {
    const { otherUser } = props;
    const dispatch = useAppDispatch();

    const currentUser = useAppSelector((state) => state.user);
    const friendships = useAppSelector((state) => state.friendships);

    const existingFriendship = useMemo(() => {
        return Object.values(friendships).find(a => a.users.includes(otherUser.id) && a.users.includes(currentUser.id),);
    }, [friendships]);

    const textToShow = useMemo(() => {
        if (existingFriendship) {
            if (existingFriendship.status === FRIENDSHIP_STATUS.ACCEPTED) {
                return 'Friends';
            }

            if (existingFriendship.status === FRIENDSHIP_STATUS.PENDING || existingFriendship.status === FRIENDSHIP_STATUS.DECLINED) {
                return 'Pending';
            }
        }
    }, []);

    const onFriendshipButtonPressed =() => {
        if (existingFriendship) {
            if (existingFriendship.status === FRIENDSHIP_STATUS.ACCEPTED) {
                Alert.alert('You are already friends');
            }
        } else {
            addFriend();
        }
    };

    const addFriend = () => {
        const onSuccess = () => {
            Alert.alert('Friend request sent!');
        };
        const onError = () => {
            Alert.alert('Could not send friend request', 'Please close app and try again');
        };

        dispatch(createFriendshipThunk(otherUser.id, onSuccess, onError));
    }

    return (
        <TouchableOpacity style={styles.friendButton} onPress={onFriendshipButtonPressed}>
            <Text style={styles.friendText}>
                {textToShow}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    friendButton: {
        height: 30,
        width: 100,
        backgroundColor: PRIMARY,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    friendText: {
        color: 'white',
        fontWeight: '500',
    },
});