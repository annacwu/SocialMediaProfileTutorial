import React, { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../src/store";
import { Message } from "../src/model/message";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MessageThread } from "../src/model/messageThread";
import { ButtonText } from "../src/components/ButtonText";
import { PRIMARY } from "../src/utils/colors";

const MessagesList = () => {
    const dispatch = useAppDispatch();
    const messages = useAppSelector(state => state.messages);
    const messageThreads = useAppSelector(state => state.messageThreads);

    const allMessageThreads = useMemo(
        () => Object.values(messageThreads),
        [messageThreads]
    );

    return (
        <View style={styles.container}>
            {allMessageThreads.map((messageThread) => (
                <MessageRow key={messageThread.id} message={messageThread} />
            ))}
        </View>
    );
};

export default MessagesList;

type MessageRowProps = {
    message: MessageThread;
};

const MessageRow = (props: MessageRowProps) => {
    const {message} = props;
    
    const users = useAppSelector(state => state.users);
    const currentUser = useAppSelector(state => state.user);
    const messages = useAppSelector(state => state.messages);

    const otherUser = useMemo(() => {
        const otherUserId = message.users.find((id) => id !== currentUser.id);
        return users[otherUserId!];
    }, []);

    return (
        <View>
            <Text>{otherUser.name}</Text>
            <Text>{messages[message.id].text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});