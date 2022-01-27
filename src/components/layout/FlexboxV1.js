import React from 'react'
import { StyleSheet, View } from 'react-native'

import Quadrado from './Quadrado'

export default props => {

    return (
        <View style={style.FlexV1}>
            <Quadrado cor='#ff8715' />
            <Quadrado cor='#47c6fc' />
            <Quadrado cor='#ec3dc6' />
            <Quadrado cor='#8b2af3' />
            <Quadrado cor='#2DB8AC' />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flexGrow: 1,
        justifyContent: 'space-between',
        backgroundColor: '#ccc'
    }
})