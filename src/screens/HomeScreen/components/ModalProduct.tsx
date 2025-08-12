import React from 'react'
import { Image, Modal, Text, View } from 'react-native'
import { styles } from '../../../theme/appTheme'
import { Product } from '../HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRYIMARY_COLOR } from '../../../commons/constants';

//interfaz para las propiedades
interface Props {
    visible: boolean;
    item: Product;
    setShowModal: () => void;
}

export const ModalProduct = ({ visible, item, setShowModal }: Props) => {
    return (
        <Modal visible={visible} animationType='fade' transparent={true}>
            <View style={styles.containerModal}>
                <View style={styles.modal}>
                    <View>
                        <Icon name='cancel' size={17} color={PRYIMARY_COLOR} onPress={setShowModal}/>
                    </View>
                    <Image style={styles.image} source={{ uri: item.pathImage }} />
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                </View>
            </View>
        </Modal>
    )
}
