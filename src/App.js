import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

import ListaProdutos from './components/produtos/ListaProdutos'
// import Familia from './components/relacao/Familia'
// import Membro from './components/relacao/Membro'
// import UsuarioLogado from './components/UsuarioLogado'
// import ParImpar from './components/ParImpar'
// import Diferenciar from './components/Diferenciar'
// import ContadorV2 from './components/contador/ContadorV2'
// import Pai from './components/indireta/Pai'
// import Pai from './components/direta/Pai'
// import Contador from './components/Contador'
// import Botao from './components/Botao'
// import Titulo from './components/Titulo'
// import Aleatorio from './components/Aleatorio'
// import Primeiro from './components/Primeiro'
// import CompPadrao, {Comp1, Comp2} from './components/Multi'
// import MinMax from './components/MinMax'

export default () => (
    <SafeAreaView style={style.App}>
        <ListaProdutos />
        {/* 
        <UsuarioLogado usuario={{nome:"Marco", email:"marco@email.com"}} />
        <UsuarioLogado usuario={{nome:"Marco", email:""}} />
        <UsuarioLogado usuario={{nome:"", email:"marco@email.com"}} />
        <UsuarioLogado usuario={null} />
        <UsuarioLogado usuario={{}} />
        <Familia>
            <Membro nome="Marco" sobrenome="Garcia"></Membro>
            <Membro nome="Maria" sobrenome="Garcia"></Membro>
            <Membro nome="Bethânia" sobrenome="Garcia"></Membro>
        </Familia>
        <Familia>
            <Membro nome="Filipe" sobrenome="Silva"></Membro>
            <Membro nome="Elenir" sobrenome="Silva"></Membro>
        </Familia>
        <ParImpar num={4}/>
        <Diferenciar/>
        <MinMax min="3" max="20" />
        <ContadorV2/>
        <Pai/>
        <Contador inicial={0} passo={10}/>
        <Contador />
        <Botao/>
        <Titulo principal="Cadastro" secundario="Tela de Cadastro do Produto"/>
        <Aleatorio min={1} max={100} />
        <MinMax min="13" max="50" />
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> 
        */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20

    }
})