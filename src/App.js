import React from 'react'
import { StyleSheet, View} from 'react-native'

import Pai from './components/indireta/Pai'
// import Pai from './components/direta/Pai'
// import Contador from './components/Contador'
// import Botao from './components/Botao'
// import Titulo from './components/Titulo'
// import Aleatorio from './components/Aleatorio'
// import Primeiro from './components/Primeiro'
// import CompPadrao, {Comp1, Comp2} from './components/Multi'
// import MinMax from './components/MinMax'

export default () => (
    <View style={style.App}>
        <Pai/>
        {/* <MinMax min="3" max="20" />
        <Contador inicial={0} passo={10}/>
        <Contador />
        <Botao/>
        <Titulo principal="Cadastro" secundario="Tela de Cadastro do Produto"/>
        <Aleatorio min={1} max={100} />
        <MinMax min="13" max="50" />
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </View>
)

const style = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20

    }
})