import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

type HeaderButton = {
    child: JSX.Element;
    onPress: () => void;
}

type Props = {
    leftButton?: HeaderButton;
    rightButton?: HeaderButton;
    showLogo?: boolean;
};

export const Header = (props: Props) => {
    const {leftButton, rightButton, showLogo = false} = props;

    const leftButtonPress = () => {
        leftButton?.onPress();
    };

    const rightButtonPress = () => {
        rightButton?.onPress();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.leftButtonContainer} onPress={leftButtonPress}>
                {leftButton?.child || null}
            </TouchableOpacity>

            <View>
                {showLogo ? <View style={styles.logo} />: null }
            </View>

            <TouchableOpacity style={styles.rightButtonContainer} onPress={rightButtonPress}>
                {rightButton?.child || null}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        width: '100%',
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
        backgroundColor: 'pink',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    leftButtonContainer: {},
    rightButtonContainer: {},
    logo: {
        height: 20,
        width: 20,
        backgroundColor: 'blue',
        borderRadius: 10,
    }
});