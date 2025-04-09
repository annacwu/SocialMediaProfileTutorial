import { View, Text, TouchableOpacity, Image } from "react-native";
import { useAppSelector } from "../src/store";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Header } from "../src/components/Header";
import { StyleSheet } from "react-native";
import { UserInfo } from "../src/components/user/UserInfo";
import { useState } from "react";
import { Posts } from "../src/components/user/Posts";
import { ROUTES } from "../src/routes";

const MESSAGE_URL = Image.resolveAssetSource(
    require('../assets/message.png'),
).uri;

const UserDetailPage = () => {
    const currentUser = useAppSelector(state => state.currentUser);
    
    const goBack = () => {
        router.back();
    };

    return (
        <SafeAreaView style={styles.safeAreaView} edges={['top']}>
            <Header leftButton={{onPress: goBack}} showLogo rightButton={{
                child: <Image source={{uri: MESSAGE_URL }} style={styles.messageIcon} />,
                onPress: () => router.push(ROUTES.MESSAGE_THREAD)
            }}/>

            <View style={styles.main}>
                <UserInfo user={currentUser} />

                <Posts isActive/>
            </View>
        </SafeAreaView>
    )
};

export default UserDetailPage;

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1
    },
    main: {
        paddingTop: 5
    },
    messageIcon: {
        height: 20,
        width: 20,
    },
})