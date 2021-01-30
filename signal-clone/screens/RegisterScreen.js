import React, { useLayoutEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements'

const RegisterScreen = ({ navigation }) => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle:"Back to Login"
        })
    },[navigation])

    const register = () => {
        
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{ marginBottom: 50 }}>
                Create a signal account
            </Text>
            <View style={styles.inputContainer}>
                <Input
                    placeholder="Full Name"
                    autofocus
                    type="text"
                    value={name}
                    onChangeText={(text) =>setName(text)}
                />
                <Input
                    placeholder="Email"
                    autofocus
                    type="text"
                    value={email}
                    onChangeText={(text) =>setEmail(text)}
                />
                <Input
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) =>setPassword(text)}
                    autofocus
                />
                <Input
                    placeholder="ImageUrl(Optional)"
                    autofocus
                    type="text"
                    value={imageUrl}
                    onChangeText={(text) => setImageUrl(text)}
                    onSubmit={register}
                />
            </View>
            <Button style={styles.button} raised onPress={register} title="Register" />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor:"white",
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop:10
    }
})
