import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { PRYIMARY_COLOR } from '../commons/constants';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';


export const LoginScreen = () => {
    return (
        <View >
            <StatusBar backgroundColor={PRYIMARY_COLOR}/>
            <TitleComponent title='Iniciar seción'/>
            <BodyComponent>
                <Text style={styles.titleWelcome}>Bienvenido de nuevo!</Text>
                <Text style={styles.textDecription}>Realiza tus compras de manera rápida y segura.</Text>
                <InputComponent/>
            </BodyComponent>
        </View>
    )
}
