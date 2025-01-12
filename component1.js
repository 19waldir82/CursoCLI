
import React from "react"
import { Text, StyleSheet } from 'react-native'

export default () => {


    const styles = StyleSheet.create({

        text: {
            fontSize: 40,
            fontWeight: 'bold',
        }
    })


    return(

        <Text style={styles.text}>Aparecido</Text>
    )
}
