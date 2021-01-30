import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { Input } from 'react-native-elements'

const RegisterScreen = ({ navigation }) => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const register = () => {
        
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar style="light" />
            {/* <Text h3 style={{ marginBottom: 50 }}>
                Create a signal account
            </Text> */}

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
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {},
    inputContainer: {}
})
