import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Product } from '../HomeScreen';
import { INPUT_COLOR, PRYIMARY_COLOR } from '../../../commons/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ModalProduct } from './ModalProduct';
//interfaz pára las propiedades
interface Props {
    item: Product;  //cada producto del arreglo
    updateStock:(id: number, quantity: number)=>void;
}

export const CardProduct = ({ item , updateStock}: Props) => {
    //hook useState para manejar el estado del modal
    const [showModal, setShowModal] = useState<boolean>(false)
    return (
        <View>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: item.pathImage }} />
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text>Precio: $ {item.price.toFixed(2)}</Text>
                </View>
                <View style={styles.containerIcon}>
                    <Icon size={30} color={PRYIMARY_COLOR} name='add-shopping-cart' 
                    onPress={()=> setShowModal(!showModal)}
                    />
                </View>
            </View>
            <ModalProduct item={item} visible={showModal} setShowModal={()=>setShowModal(!showModal)} updateStock={updateStock}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flexDirection: 'row',
        padding: 16,
        backgroundColor: INPUT_COLOR,
        alignItems: 'center',
        borderRadius: 20,
        elevation: 7,
        margin: 8,
        justifyContent:'center'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    image: {
        height: 100,
        width: 100,
        marginRight: 10
    },
    icon: {
        fontSize: 20,
        alignSelf: 'center',

    },
    containerIcon: {
        flex: 1,
        alignItems: 'flex-end'
    }
})