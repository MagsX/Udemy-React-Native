import React, { Component } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import Estilo from "../estilo"

import MegaNumero from "./MegaNumero"

export default class Mega extends Component {

    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros: []
    }


    alterarQtdNumeros = (qtd) => {
        this.setState({ qtdNumeros: +qtd })
    }

    gerarNumeroUnico = num => {
        const novo = parseInt(Math.random() * 150) + 1
        return num.includes(novo) ? this.gerarNumeroUnico(num) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroUnico(n)], [])
            .sort((a, b) => a - b)
        this.setState({ numeros })
    }

    exibirNumeros = () => {
        const num = this.state.numeros
        return num.map(num => {
            return <MegaNumero
                key={num}
                num={num}
            />
        })
    }

    render() {
        return (
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput
                    style={{ borderBottomWidth: 1 }}
                    keyboardType={'numeric'}
                    placeholder="Qtd de Números"
                    value={`${this.state.qtdNumeros}` === 'undefined'
                        ? ''
                        : `${this.state.qtdNumeros}`}
                    onChangeText={this.alterarQtdNumeros}
                />
                <Button
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />
                <View style={style.quadroSorteio}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}

const style = StyleSheet.create({
    quadroSorteio:{
        flexDirection: 'row',
        marginTop: 20,
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingHorizontal: 20,
    }
})