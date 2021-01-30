import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import React, { useLayoutEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Platform } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { Avatar } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'

const Chat = ({ navigation, route }) => {

    const [input, setInput] = useState("");
    
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Chat',
            headerBackTitleVisible: false,
            headerTitleAlign: "left",
            headerTitle: () => (
                <View style={{ 
                    flexDirection: "row",
                    alignItems: "center"
                 }}>
                    <Avatar
                        rounded
                        source={{ 
                            uri:"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
                        }}
                    />
                    <Text style={{ color: "white", marginLeft: 20, fontWeight: "700" }}>{route.params.chatName}</Text>
                </View>
            ),
            headerLeft: () => (
                <TouchableOpacity
                    style={{ marginLeft: 20 }}
                    onPress={navigation.goBack}
                >
                    <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <View style={{ flexDirection:"row", justifyContent: "space-between", width:80, marginRight: 20}}>
                    <TouchableOpacity>
                        <FontAwesome name="video-camera" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="call" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            )
        });
    }, [navigation])
    
    const sendMessage = () => {
        
    }

    return (
        <SafeAreaView style={{ flex:1, backgroundColor:"white" }}>
            <StatusBar auto="light" />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
                keyboardVerticalOffset={90}
            >
                <>
                    <ScrollView>
                        {/* Chat Goes here */}
                    </ScrollView>
                    <View style={styles.footer}>
                        <TextInput
                            placeholder="Signal Message"
                            style={styles.textInput}
                            value={input}
                            onChangeText={(text) =>setInput(text)}
                        />
                        <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
                            <Ionicons name="send" size={24} color="#2B68E8" />
                        </TouchableOpacity>
                    </View>
                </>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Chat;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding:15
    },
    textInput: {
        bottom: 0,
        height: 40,
        flex: 1,
        marginRight: 15,
        borderColor: "transparent",
        backgroundColor: "#ECECEC",
        borderWidth: 1,
        padding: 10,
        color: "grey",
        borderRadius: 30,
        color:"black"
    }
})
