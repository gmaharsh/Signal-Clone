import React, { useLayoutEffect } from 'react'
import { ScrollView, View, Text, SafeAreaView, _ScrollView } from 'react-native'
import CustomListItem from '../components/CustomListItem'

const HomeScreen = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Signal",
            headerStyle: { backgroundColor: "#fff" },
            headerTitleStyle: { color: "black" },
            headerTintColor:"black"
        })
    },[navigation])

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen
