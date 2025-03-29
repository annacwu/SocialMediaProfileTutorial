import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";


type HeaderButton = {
    child?: JSX.Element;
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
                {leftButton?.child ||  leftButton?.onPress && <Image source={require('../../assets/back.png')} style={styles.backImage} /> || null }
            </TouchableOpacity>

            <View>
                {showLogo ? <View style={styles.logo} /> : null }
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
        borderBottomColor: '#EEEEEE',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    leftButtonContainer: { // need this so that it doesnt shift the other components if there isnt actually something there
        height: 30,
        width: 30, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightButtonContainer: {
        height: 30,
        width: 30, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 20,
        width: 20,
        backgroundColor: 'blue',
        borderRadius: 10,
    },
    backImage: {
        height: 20,
        width: 20
    }
});