import React, { useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../src/store";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Header } from "../src/components/Header";
import { TextInput } from "react-native-gesture-handler";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

const MessageThread = () => {
    const dispatch = useAppDispatch();
    const messages = useAppSelector((state) => state.messages);
    const messageThreads = useAppSelector((state) => state.messageThreads);
    const user = useAppSelector((state) => state.user);
    const currentUser = useAppSelector((state) => state.currentUser);

    const [message, setMessage] = useState('');
    const inputY = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: inputY.value }]
        };
    });

    const existingThread = useMemo(() => {
        return Object.values(messageThreads).find((thread) => {
            return thread.users.includes(user.id) && thread.users.includes(currentUser.id);
        })
    }, []);

    const goBack = () => {
        router.back();
    };

    const onInputFocus = () => {};

    return (
        <SafeAreaView style={styles.container}>
            <Header leftButton={{onPress: goBack}} showLogo />
            {!existingThread && <Text>No messsages yet</Text>}

            <TextInput value={message} onChangeText={(text) => setMessage(text)} style={[styles.input, animatedStyles]} />
        </SafeAreaView>
    );
};

export default MessageThread;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height: 45,
        width: '90%',
        backgroundColor: 'red',
    }
});