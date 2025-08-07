import React from 'react'
import { StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { PRYIMARY_COLOR } from '../commons/constants'
import { TitleComponent } from '../components/TitleComponent'
import { BodyComponent } from '../components/BodyComponent'
import { styles } from '../theme/appTheme'
import { InputComponent } from '../components/InputComponent'
import { Icon } from 'react-native-vector-icons/Icon'
import { ButtonComponent } from '../components/ButtonComponent'
import { CommonActions, useNavigation } from '@react-navigation/native'

export const RegisterScreen = () => {
    //hook para navegacion entre pantallas
    const navigation = useNavigation();
    //Funcion para modificar el estado del formularios
    const changeForm = (property: string, value: string): void => {

    }
    //funcion para permitir registro
    const handleLogin = (): void => {

    }
    return (
        <View>
            <StatusBar backgroundColor={PRYIMARY_COLOR} />
            <TitleComponent title='Registrate' />
            <BodyComponent>
                <Text style={styles.titleWelcome}>Sumergete en el mundo de las compras.</Text>
                <Text style={styles.textDecription}>Realiza tus compras de manera rápida y segura.</Text>
                <View>
                    <InputComponent placeholder='Nombre' keyboardType='default' changeForm={changeForm} property='' />
                    <InputComponent placeholder='Usuario' keyboardType='default' changeForm={changeForm} property='username' />
                    <InputComponent placeholder='Contraseña' keyboardType='default' changeForm={changeForm} property='password' />
                </View>
                <ButtonComponent text='Registrar' handleLogin={handleLogin} />
                <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.goBack)}>
                    <Text style={styles.textRedirect}>Ya tienes una cuenta? Iniciar sesión ahora</Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    )
}
