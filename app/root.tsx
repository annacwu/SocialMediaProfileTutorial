import { router } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { ROUTES } from "../src/routes";

const Root = () => {
    useEffect(() => {
        setTimeout(() => {
            router.push(ROUTES.SIGN_UP);
        }, 1000);
    }, []);

    return (
        <View>
            <Text>Root</Text>
        </View>
    );
};

export default Root;