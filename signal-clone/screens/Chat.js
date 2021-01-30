import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'
import React, { useLayoutEffect } from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { Avatar } from 'react-native-elements'

const Chat = ({ navigation, route }) => {
    
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
    },[navigation])

    return (
        <View>
            <Text>{route.params.chatName}</Text>
        </View>
    )
}

export default Chat
