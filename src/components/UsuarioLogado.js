import React from 'react'
import {Text, View} from 'react-native'
import Estilo from './estilo'
import If from './if'

export default props => {
    const usuario = props.usuario || {}
    return(
        <View>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={Estilo.txtG}>Usuário Logado</Text>
                <Text >
                    Nome: {usuario.nome}  Email: {usuario.email}
                </Text>
            </If>
        </View>
    )
}