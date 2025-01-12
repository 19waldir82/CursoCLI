
import React from "react"
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import Component1 from './Components/component1'

export default () => {


    const styles = StyleSheet.create({
        view: {
            flex: 1,
            backgroundColor: '#eaeaea',
            justifyContent: 'center',
            alignItems: 'center'
        },

        text: {
            fontSize: 40,
            fontWeight: 'bold',
        }
    })


    return(
        <SafeAreaView style={styles.view}>
            <Text style={styles.text}>Waldir</Text>
            <Component1/>
        </SafeAreaView>
    )
}
