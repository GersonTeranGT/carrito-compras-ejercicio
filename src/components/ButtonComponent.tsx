import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { SECONDARY_COLOR, TERTIARY_COLOR } from '../commons/constants'


interface Props { //propiedades-> valores desde otros lugares
    text: string;
    //onPress:()=>void
    handleLogin: ()=>void;
    //son como los nombres
}
export const ButtonComponent = ({text, handleLogin}:Props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText} >{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: SECONDARY_COLOR,
        paddingVertical:15,
        borderRadius:15,marginVertical:10,
        width:90,
        marginRight:12,
        boxShadow:'5px 5px 12px rgba(15, 14, 14, 0.5)',
        alignSelf:'center'
    },
    buttonText:{
        textAlign:'center',
        color:TERTIARY_COLOR,
        fontSize:14,
        fontWeight:'bold',
    }
})