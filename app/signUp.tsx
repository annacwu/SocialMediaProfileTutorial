import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../src/components/Header";
import { AppInput } from "../src/components/AppInput";
import { InputLabel } from "../src/components/InputLabel";
import { Spacing } from "../src/components/Spacing";
import { ContinueButton } from "../src/components/ContinueButton";
import { ButtonText } from "../src/components/ButtonText";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createAccount = () => {
        console.log("Create account");
    };

    return (
        <SafeAreaView edges={['top']}>
            <Header showLogo />

            <View style={styles.main}>
                <Text style={styles.heading}>
                    Welcome to Social Media App
                </Text>
            </View>

            <View style={styles.elementContainer}>
                <InputLabel text="Email" />
                <AppInput 
                value={email} 
                onChangeText={setEmail} 
                autoCapitalize="none" 
                autoCorrect={false} 
                />
            </View>

            <Spacing vertical={10} />

            <View style={styles.elementContainer}>
                <InputLabel text="Password" />
                <AppInput 
                value={password} 
                onChangeText={setPassword}
                autoCapitalize="none" 
                autoCorrect={false} 
                secureTextEntry
                />
            </View>

            <Spacing vertical={10} />

            <View style={styles.elementContainer}>
                <ContinueButton 
                child={<ButtonText text="Create Account" />}
                onPress={createAccount}
                />  
            </View>


        </SafeAreaView>
    )
};

export default SignUp;

const styles = StyleSheet.create({
    main: {},
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        alignSelf: 'center',
        marginTop: 10,
    },
    elementContainer: {
        width: '80%',
        alignSelf: 'center',
    }
});