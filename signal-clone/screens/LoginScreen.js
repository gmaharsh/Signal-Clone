import { StatusBar } from 'expo-status-bar'
import { auth } from '../firebase';
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { Button, Image, Input } from 'react-native-elements'

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    useEffect(() => {
        const unsubscribe = auth
            .onAuthStateChanged((authUser) => {
                if (authUser) {
                    navigation.replace("Home")
                }
            });
        
        return unsubscribe;
    })

    const signIn = () => {
        
    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style="light" />
            <Image source={{
                uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png"
                
                }}
                style={{ width: 200, height: 200 }}
            />
            <View style={styles.inputContainer}>
                <Input
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) =>setEmail(text)}
                    autofocus />
                <Input
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) =>setPassword(text)}
                    autofocus
                />
            </View>
            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            <Button containerStyle={styles.button} onPress={() => navigation.navigate("Register")} type="outline" title="Register" />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
        // padding: 10,
        backgroundColor:"white",
    },
    inputContainer: {
        width:300,
    },
    button: {
        width: 200,
        marginTop: 10,
    }
})
