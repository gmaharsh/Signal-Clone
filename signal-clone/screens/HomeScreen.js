import { auth, db } from '../firebase'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { ScrollView, View, Text, SafeAreaView } from 'react-native'
import { Avatar } from 'react-native-elements'
import CustomListItem from '../components/CustomListItem'
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 


const HomeScreen = ({ navigation }) => {

    const [chats, setChats] = useState([]);
    
    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace("Login")
        });
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Signal",
            headerStyle: { backgroundColor: "#fff" },
            headerTitleStyle: { color: "black" },
            headerTintColor: "black",
            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
                        <Avatar
                            rounded
                            source={{
                                uri: auth?.currentUser?.photoURL
                            }}
                        />
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () => (
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width:80,
                    marginRight: 20,
                }}>
                    <TouchableOpacity>
                        <AntDesign name="camera" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("AddChat")}>
                        <FontAwesome name="pencil" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            )
        })
    }, [navigation])
    
    useEffect(() => {
        const unsubscribe = db.collection('chats').onSnapshot(snapshot => (
            setChats(snapshot.docs.map(doc => ({
                id: doc.id,
                data:doc.data(),
            })))
        ))

        return unsubscribe;
    },[])
    // console.log(auth)
    console.log(chats.length)
    return (
        <SafeAreaView>
            <ScrollView>
                {chats && chats.map(({id, data :{chatName} }) => (
                    <CustomListItem key={id} id={id} chatName={chatName} />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen
