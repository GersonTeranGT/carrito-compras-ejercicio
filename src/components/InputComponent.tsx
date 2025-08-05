import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { INPUT_COLOR, TERTIARY_COLOR } from '../commons/constants'


export const InputComponent = () => {
    return (
        <TextInput
            placeholder='Usuario'
            keyboardType='default'
            style={styles.inputText}
        />
    )
}
const styles = StyleSheet.create({
    inputText:{
        backgroundColor:INPUT_COLOR,
        borderRadius:10,
        paddingHorizontal:20
    }
})