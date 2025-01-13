
import React from "react"
import { Text } from 'react-native'
import estilo from "./estilo"

export default () => {
    return(
        <Text style={estilo.text}>Comp#Oficial</Text>
    )
}

function Comp1 () {
    return(
        <Text style={estilo.text}>Comp#01</Text>
    )
}

function Comp2 () {
    return(
        <Text style={estilo.text}>Comp#02</Text>
    )
}

export { Comp1, Comp2 }
