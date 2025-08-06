import { StyleSheet } from "react-native";
import { PRYIMARY_COLOR, SECONDARY_COLOR } from '../commons/constants';

export const styles = StyleSheet.create({
    titleWelcome: {
        fontSize: 20,
        fontWeight: 'bold',
        color: SECONDARY_COLOR,
        paddingVertical: 5
    },
    textDecription: {
        fontSize: 15,
        color: PRYIMARY_COLOR,
        paddingVertical: 10
    },
    containerForm:{
        marginVertical:10
    },
    contenedorBotones:{
        flexDirection:'row',
        justifyContent:'center'
    }
})