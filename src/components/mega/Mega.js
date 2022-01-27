import React, { Component } from "react"
import { Text } from "react-native"
import Estilo from "../estilo"

export default class Mega extends Component {

    state = {
        qtdNumeros: this.props.qtdNumeros
    }

    alterarQtdNumeros(qtd) {
        this.setState({ qtdNumeros })
    }

    render() {
        return (
            <Text style={Estilo.txtG}>
                Gerador de Mega-Sena
                {this.props.qtdNumeros}
            </Text>
        )
    }
}