import { StyleSheet } from "react-native";
import { INPUT_COLOR, PRYIMARY_COLOR, SECONDARY_COLOR } from '../commons/constants';

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
    iconForm:{
        position:'absolute',
        bottom:16.5,
        right:12
    },
    textRedirect:{
        fontSize:16,
        fontWeight:'bold',
        color: PRYIMARY_COLOR,
        textAlign:'center',
        marginTop:20
    },
    containerModal:{
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.5)' ,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    modal:{
        padding:20,
        margin:15,
        backgroundColor: INPUT_COLOR,
        borderRadius:10
    },
    image: {
        height: 100,
        width: 100,
        marginRight: 10
    },
})