import React, { Component } from "react"
import { Button, Text, TextInput } from "react-native"
import Estilo from "../estilo"

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
        const { qtdNumeros } = this.state
        const numeros = []

        for (let i = 0; i < qtdNumeros; i++) {
            const n = this.gerarNumeroUnico(numeros)
            numeros.push(n)
        }

        numeros.sort((a, b) => a - b)
        this.setState({ numeros })
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
                <Text>
                    {this.state.numeros.join(',')}
                </Text>
            </>
        )
    }
}