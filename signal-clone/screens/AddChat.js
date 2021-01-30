import React, { useLayoutEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { Icon, Input, Button } from 'react-native-elements';
import { db } from '../firebase';

const AddChat = ({ navigation }) => {

    const [input, setInput] = useState("");
    
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Add a New Chat',
            headerBackTitle:"Chats"
        })
    }, [navigation])
    
    const createChat = async () => {
        await db.collection("chats").add({
            chatName: input
        }).then(() => {
            navigation.goBack();
        })
        .catch(err => {
            alert(error)
        })
    }


    return (
        <View style={styles.container}>
            <Input
                placeholder="Enter a new chat"
                value={input}
                onChangeText={(text) => setInput(text)}
                onSubmitEditing={createChat}
                leftIcon={
                    <Icon name="wechat" type="antdesign" size={24} color="black" />
                }
            />
            <Button disabled={!input} onPress={createChat} title="Create New Chat" />
        </View>
    )
}

export default AddChat;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 30,
        width:"100%"
    }
})
