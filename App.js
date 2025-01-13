
import React from "react"
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import Component1 from './Components/component1'
import Comp, { Comp1, Comp2 } from './Components/mult'
import Estilo from "./Components/estilo"

export default () => {

    return(
        <SafeAreaView style={styles.view}>
            <Text style={Estilo.text}>Waldir</Text>
            <Component1/>
            <Comp />
            <Comp1 />
            <Comp2 />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({

    view: {
        flex: 1,
        backgroundColor: '#eaeaea',
        justifyContent: 'center',
        alignItems: 'center'
    },
})
