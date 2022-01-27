import React, { useState } from 'react'
import { Text } from 'react-native'
import Filho from './Filho'
import Estilo from '../estilo'

export default props => {
    const [num, setNum] = useState(0)
    const [texto, setText] = useState('')
    
    function exibirValor(numero, texto) {
        setNum(numero)
        setText(texto)
    }

    return(
        <>
            <Text style={Estilo.txtG}>{texto}{num}</Text>
            <Filho 
                min={1} 
                max={60}
                funcao={exibirValor}
            />
        </>
    )
}