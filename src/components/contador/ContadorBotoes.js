import React from 'react'
import {View, StyleSheet, Button} from 'react-native'

export default props => {

    return(
        <View style={style.Botoes}>
            <Button title="-" onPress={props.dec}/>
            <Button title="+" onPress={props.inc}/>
        </View>
    )
}

const style = StyleSheet.create({
    Botoes: {
        flexDirection: "row"
    }
})