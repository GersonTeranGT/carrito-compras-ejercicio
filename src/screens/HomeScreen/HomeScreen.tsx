import React from 'react'
import { FlatList, StatusBar, Text, View } from 'react-native'
import { PRYIMARY_COLOR } from '../../commons/constants'
import { TitleComponent } from '../../components/TitleComponent'
import { BodyComponent } from '../../components/BodyComponent'
import { CardProduct } from './components/CardProduct'
import { ModalProduct } from './components/ModalProduct'

//iinterfaz para los productos
export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

export const HomeScreen = () => {
    //arreglo con una lista de productos
    const products: Product[] = [
        { id: 1, name: 'Funda de arroz', price: 3.30, stock: 5, pathImage: 'https://www.supermaxi.com/wp-content/uploads/2024/08/7861035010142-1-1.jpg' },
        { id: 2, name: 'Funda de azucar', price: 2.50, stock: 7, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/160653107_M.jpg' },
        { id: 3, name: 'Funda de papas', price: 1.70, stock: 10, pathImage: 'https://www.eureka.com.ec/clasica/747-large_default/papas-fritas-naturales-ruffles-400-g.jpg' },
        { id: 4, name: 'Funda de fideos', price: 2.00, stock: 4, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/133101593_M.jpg' },
        { id: 5, name: 'Funda de sal', price: 0.50, stock: 8, pathImage: 'https://distribuidoracampos.com/wp-content/uploads/2023/01/CRIS-SAL-2KG-pvp-0.95.jpg' },
        { id: 6, name: 'Funda de arroz', price: 3.30, stock: 5, pathImage: 'https://www.supermaxi.com/wp-content/uploads/2024/08/7861035010142-1-1.jpg' },
        { id: 7, name: 'Funda de azucar', price: 2.50, stock: 7, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/160653107_M.jpg' },
        { id: 8, name: 'Funda de papas', price: 1.70, stock: 10, pathImage: 'https://www.eureka.com.ec/clasica/747-large_default/papas-fritas-naturales-ruffles-400-g.jpg' },
        { id: 9, name: 'Funda de fideos', price: 2.00, stock: 4, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/133101593_M.jpg' },
        { id: 10, name: 'Funda de sal', price: 0.50, stock: 8, pathImage: 'https://distribuidoracampos.com/wp-content/uploads/2023/01/CRIS-SAL-2KG-pvp-0.95.jpg' },

    ];

    return (
        <View>
            <StatusBar backgroundColor={PRYIMARY_COLOR} />
            <TitleComponent title='Registrate' />
            <BodyComponent>
                <FlatList
                    data={products}
                    renderItem={({ item }) => <CardProduct item={item} />}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                />
            </BodyComponent>
        </View>
    )
}
