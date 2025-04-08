import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { ROUTES } from "../src/routes";
import { auth } from "../firebaseConfig";
import { useAppDispatch } from "../src/store";
import { takeUserToAppThunk } from "../src/store/thunks/user-thunk";
import { onAuthStateChanged } from "firebase/auth";

const Root = () => {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true); // Track loading state

    const goToSignUp = () => router.push(ROUTES.SIGN_UP);
    const goToApp = () => router.push(ROUTES.HOME);

    // this is the auto-login function
    useEffect(() => {
        console.log("Listening for auth state changes...");
        
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user?.email) {
                console.log("User is logged in:", user.email);
                dispatch(
                    takeUserToAppThunk({ 
                        email: user.email, 
                        onSuccess: goToApp, 
                        onError: goToSignUp,
                    })
                );
            } else {
                console.log("No user found, redirecting to sign up...");
                goToSignUp();
            }
            setLoading(false);
        });

        return () => unsubscribe(); // Cleanup the listener when unmounting
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <View>
            <Text>Root</Text>
        </View>
    );
};

export default Root;