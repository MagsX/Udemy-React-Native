import React from 'react'
import { StyleSheet, View } from 'react-native'


export default props => {

    return (
        <View style={style.FlexV4}>
            <View style={style.V1}/>            
            <View style={style.V2}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        width: 100,
        flexGrow: 1,
        backgroundColor: '#ccc',
    },
    V1: {
        backgroundColor: '#8b2af3',
        flexGrow: 1,
    },
    V2: {
        backgroundColor: '#2DB8AC',
        flexGrow: 1,
    }
})