import React, { useState } from 'react'
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native'
import { INPUT_COLOR, PRYIMARY_COLOR } from '../../commons/constants'
import { TitleComponent } from '../../components/TitleComponent'
import { BodyComponent } from '../../components/BodyComponent'
import { CardProduct } from './components/CardProduct'
import { ModalProduct } from './components/ModalProduct'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ModalCart } from './components/ModalCart'

//iinterfaz para los productos
export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

//interfaz para el reglo carrito
export interface Cart{
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
}

export const HomeScreen = () => {
    //arreglo con una lista de productos
    const products: Product[] = [
        { id: 1, name: 'Funda de arroz', price: 3.30, stock: 0, pathImage: 'https://www.supermaxi.com/wp-content/uploads/2024/08/7861035010142-1-1.jpg' },
        { id: 2, name: 'Funda de azucar', price: 2.50, stock: 7, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/160653107_M.jpg' },
        { id: 3, name: 'Funda de papas', price: 1.70, stock: 0, pathImage: 'https://www.eureka.com.ec/clasica/747-large_default/papas-fritas-naturales-ruffles-400-g.jpg' },
        { id: 4, name: 'Funda de fideos', price: 2.00, stock: 4, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/133101593_M.jpg' },
        { id: 5, name: 'Funda de sal', price: 0.50, stock: 8, pathImage: 'https://distribuidoracampos.com/wp-content/uploads/2023/01/CRIS-SAL-2KG-pvp-0.95.jpg' },
        { id: 6, name: 'Funda de arroz', price: 3.30, stock: 5, pathImage: 'https://www.supermaxi.com/wp-content/uploads/2024/08/7861035010142-1-1.jpg' },
        { id: 7, name: 'Funda de azucar', price: 2.50, stock: 7, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/160653107_M.jpg' },
        { id: 8, name: 'Funda de papas', price: 1.70, stock: 10, pathImage: 'https://www.eureka.com.ec/clasica/747-large_default/papas-fritas-naturales-ruffles-400-g.jpg' },
        { id: 9, name: 'Funda de fideos', price: 2.00, stock: 4, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/133101593_M.jpg' },
        { id: 10, name: 'Funda de sal', price: 0.50, stock: 8, pathImage: 'https://distribuidoracampos.com/wp-content/uploads/2023/01/CRIS-SAL-2KG-pvp-0.95.jpg' },
    ];

    //hook useState para maejar ele estado de los productos
    const [listProducts, setListProducts] = useState<Product[]>(products)  //arreglo de productos

    //hook useState para controlar los productos del carrito
    const [cart, setCart] = useState<Cart[]>([]);   //arreglo con los productos seleccionados

    //HOOK USESTATE PARA MANEJAR EL ESTADO DEL MODAL
    const [showModal, setShowModal] = useState<boolean>(false)

    //funcion para actualizar el stock
    const updateStock = (id: number, quantity: number): void => {
        //fuincion map genera un nuevo arreglo
        const updateProducts = listProducts.map(product => product.id == id
            ? { ...product, stock: product.stock - quantity }
            : product);
        //actualizar producto en el arreglo
        setListProducts(updateProducts);
        //lamar funcion para añadir al carrito
        addProduct(id, quantity)
    }

    //funcion para agregar los produtos al carrito
    const addProduct = (id: number, quantity: number): void => {
        const product = listProducts.find(product => product.id == id);

        //validar si existe el producto
        if(!product){
            return;
        }

        //crear produicto para el carrito
        const newProductCart: Cart = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            total: product.price * quantity
        }

        //añadir en el carrito
        setCart([...cart, newProductCart])
        //console.log(cart)
        
    }

    return (
        <View>
            <StatusBar backgroundColor={PRYIMARY_COLOR} />
            <View style={styles.headerHome}>
                <TitleComponent title='Registrate' />
                <View style={styles.containerIcon}>
                    <Text style={styles.textIconCart}>{cart.length}</Text>
                    <Icon 
                    name='shopping-cart'
                    size={27} color={INPUT_COLOR}
                    onPress={()=> setShowModal(!showModal)}/>
                </View>
            </View>
            <BodyComponent>
                <FlatList
                    data={listProducts}
                    renderItem={({ item }) => <CardProduct item={item} updateStock={updateStock}/>}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                />
            </BodyComponent>
            <ModalCart visible={showModal} setShowModal={()=> setShowModal(!showModal)} cart={cart}/>
        </View>

    )
}
const styles = StyleSheet.create({
    headerHome:{
        flexDirection:'row',
        alignItems: 'center'
    },
    containerIcon:{
        flex:1,
        alignItems:'flex-end',
        paddingHorizontal:30,
    },
    textIconCart:{
        color:INPUT_COLOR,
        backgroundColor:'red',
        fontWeight:'bold',
        borderRadius:25,
        paddingHorizontal:5,
        fontSize:13,
    }
    
})