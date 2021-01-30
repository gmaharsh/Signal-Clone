import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'
import { Platform } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { Avatar } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { auth, db } from '../firebase'
import * as firebase from 'firebase';
import { Keyboard } from 'react-native';


const Chat = ({ navigation, route }) => {

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection('chats')
            .doc(route.params.id).collection('messages').orderBy('timestamp', 'asc').onSnapshot((snapshot) => {
            setMessages(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
            })
        return unsubscribe;
    },[route])
    
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
        Keyboard.dismiss();
        
        db.collection('chats').doc(route.params.id).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL
        })

        setInput('');
    }

    return (
        <SafeAreaView style={{ flex:1, backgroundColor:"white" }}>
            <StatusBar auto="light" />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
                keyboardVerticalOffset={90}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <>
                    <ScrollView>
                        {messages.map(({ id, data }) => (
                            data.email === auth.currentUser.email ? (
                                <View key={id} style={styles.receiver}>
                                    <Avatar />
                                    <Text style={styles.receiveText}>{data.message}</Text>
                                </View>
                            ): (
                                <View key={id} style={styles.sender}>
                                    <Avatar />
                                    <Text style={styles.senderText}>{data.message}</Text>
                                </View>
                            )
                        ))}
                    </ScrollView>
                    <View style={styles.footer}>
                        <TextInput
                            placeholder="Signal Message"
                            style={styles.textInput}
                            value={input}
                            onSubmitEditing={sendMessage}
                            onChangeText={(text) =>setInput(text)}
                        />
                        <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
                            <Ionicons name="send" size={24} color="#2B68E8" />
                        </TouchableOpacity>
                    </View>
                </>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Chat;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    receiver: {
        padding: 15,
        backgroundColor: "#ECECEC",
        alignSelf: "flex-end",
        borderRadius: 20,
        marginRight: 15,
        marginBottom: 20,
        maxWidth: "80%",
        position:"relative"
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
