import React, { useEffect, useLayoutEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import { db } from '../firebase';

const CustomListItem = ({ id, chatName, enterChat }) => {

    const [chatMessages, setChatMessages] = useState([]);
    
    useLayoutEffect(() => {
        const unsubscribe = db.collection('chats')
            .doc(id)
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => {
            setChatMessages(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
            })
        return unsubscribe;
    },[id])

    console.log(chatMessages[0])

    return (
        <ListItem id={id} bottomDivider onPress={() => enterChat(id, chatName)}>
            <Avatar
                rounded
                source={{
                    uri: chatMessages[0]?.data.photoURL
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "900" }}>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                {chatMessages[0]?.data.displayName} : {chatMessages[0]?.data.message}
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem
