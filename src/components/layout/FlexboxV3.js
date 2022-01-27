import React from 'react'
import { StyleSheet, View } from 'react-native'

import Quadrado from './Quadrado'

export default props => {

    return (
        <View style={style.FlexV3}>
            <Quadrado cor='#ff8715' />
            <Quadrado cor='#47c6fc' />
            <Quadrado cor='#ec3dc6' />
            <Quadrado cor='#8b2af3' />
            <Quadrado cor='#2DB8AC' />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 350,
        width: '100%',
        backgroundColor: '#ccc'
    }
})