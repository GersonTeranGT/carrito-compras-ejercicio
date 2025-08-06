import React from 'react'
import { KeyboardTypeOptions, StyleSheet, TextInput } from 'react-native'
import { INPUT_COLOR, TERTIARY_COLOR } from '../commons/constants'

interface Props { //propiedades-> valores desde otros lugares
    placeholder: string;
    keyboardType: KeyboardTypeOptions;
    changeForm: (property: string, value: string) => void; //fincion para modificar el estado del formulario (LoginScreen)
    property:string;//representa las propiedades del objeto del formulario
    isPassword?: boolean; //propiedad opcional >?< 
}

export const InputComponent = ({ placeholder, keyboardType, changeForm, property, isPassword}: Props) => {
    return (
        <TextInput
            placeholder={placeholder}//propiedades dinamicas para recivir
            keyboardType={keyboardType}
            //capturamos el valor con onChangeText
            onChangeText={(value) => changeForm(property, value)}
            secureTextEntry={isPassword}
            style={styles.inputText}
        />

    )
}
const styles = StyleSheet.create({
    inputText: {
        backgroundColor: INPUT_COLOR,
        borderRadius: 10,
        paddingHorizontal: 20,
        marginVertical: 7
    }
})