import { StyleSheet } from "react-native";
import { INPUT_COLOR, PRYIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from '../commons/constants';

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
    headerModal:{
        flexDirection:'row',
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
        padding:10,
        backgroundColor:SECONDARY_COLOR,
        borderRadius:15
    },
    containerIcon:{
        flex:1,
        alignItems:'flex-end'
    },
    titleModal:{
        fontSize:18,
        fontWeight:'bold',
        color:INPUT_COLOR,
        paddingRight:10
    },
    imageModal:{
        width:150,
        height:150,
        marginTop:20,
        borderRadius:15
    },
    containerImageM:{
        alignSelf:'center'
    },
    containerQuantity:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        marginTop:20,
        
    },
    buttonQuantity:{
        height:50,
        width:50,
        backgroundColor:TERTIARY_COLOR,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonQuantityText:{
        color: 'black',
        fontSize:20,
        fontWeight:'bold',
    },
    textQuantity:{
        color: 'black',
        fontSize:19,
        fontWeight:'bold',
    },
    buttonAddCart:{
        backgroundColor:SECONDARY_COLOR,
        marginTop:15,
        paddingVertical:10,
        alignItems:'center',
        borderRadius:20
    },
    buttonCartText:{
        color: INPUT_COLOR,
        fontWeight:'bold'
    },
    textNoAvailable:{
        color:'red',
        fontSize:20,
        alignSelf:'center',
        marginTop:10,
        fontWeight:'bold'
    }
})