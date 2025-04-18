import { View, Text, TouchableOpacity, Image } from "react-native";
import { useAppSelector } from "../src/store";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Header } from "../src/components/Header";
import { StyleSheet } from "react-native";
import { UserInfo } from "../src/components/user/UserInfo";
import { useState } from "react";
import { BORDER_LIGHT_GREY } from "../src/utils/colors";
import { Posts } from "../src/components/user/Posts";
import { Friends } from "../src/components/user/Friends";
import { ROUTES } from "../src/routes";

const MESSAGE_URL = Image.resolveAssetSource(
    require('../assets/message.png'),
).uri;

type TABS = 'Posts' | 'Friends';

const MyProfile = () => {
    const user = useAppSelector(state => state.user);
    
    const [activeTab, setActiveTab] = useState<TABS>('Posts');

    const goBack = () => {
        router.back();
    };

    const onTabPress = (tab: TABS) => setActiveTab(tab);

    return (
        <SafeAreaView style={styles.safeAreaView} edges={['top']}>
            <Header leftButton={{onPress: goBack}} showLogo rightButton={{
                child: <Image source={{uri: MESSAGE_URL }} style={styles.messageIcon} />,
                onPress: () => router.push(ROUTES.MESSAGES)
            }}/>

            <View style={styles.main}>
                <UserInfo user={user} />

                <Tabs onTabPress={onTabPress} />

                <Posts isActive={activeTab === 'Posts'}/>
                <Friends isActive={activeTab === 'Friends'}/>
            </View>
        </SafeAreaView>
    )
};

export default MyProfile;

type TabsProps = {
    onTabPress: (tab: TABS) => void;
};

const Tabs = (props: TabsProps) => {
    const {onTabPress} = props;

    const [activeTab, setActiveTab] = useState<TABS>('Posts');

    const onPostsPress = () => {
        setActiveTab('Posts');
        onTabPress('Posts');
    }

    const onFriendsPress = () => {
        setActiveTab('Friends');
        onTabPress('Friends');
    }

    return (
        <View style={styles.tabsContainer}>
            <TouchableOpacity style={[styles.tabColumn, activeTab === 'Posts' ? styles.selectedTabColumn : {}]} onPress={onPostsPress}>
                <Text>
                    Posts
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.tabColumn, activeTab === 'Friends' ? styles.selectedTabColumn : {}]}  onPress={onFriendsPress}>
                <Text>
                    Friends
                </Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1
    },
    main: {
        paddingTop: 5
    },
    tabsContainer: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderColor: BORDER_LIGHT_GREY,
    },
    tabColumn: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    },
    selectedTabColumn: {
        borderBottomWidth: 1,
        borderColor: 'blue',
    },
    messageIcon: {
        height: 20,
        width: 20,
    },
})