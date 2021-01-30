import { auth } from '../firebase'
import React, { useLayoutEffect } from 'react'
import { ScrollView, View, Text, SafeAreaView } from 'react-native'
import { Avatar } from 'react-native-elements'
import CustomListItem from '../components/CustomListItem'
import { TouchableOpacity } from 'react-native'

const HomeScreen = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Signal",
            headerStyle: { backgroundColor: "#fff" },
            headerTitleStyle: { color: "black" },
            headerTintColor: "black",
            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity>
                        <Avatar
                            rounded
                            source={{
                                uri: auth?.currentUser?.photoURL
                            }}
                        />
                    </TouchableOpacity>
                </View>
            ),
        })
    }, [navigation])
    
    console.log(auth)

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen
