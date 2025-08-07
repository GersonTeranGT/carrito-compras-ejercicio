import React, { useState } from 'react'
import { Alert, Button, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent'
import { PRYIMARY_COLOR } from '../commons/constants';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CommonActions, useNavigation } from '@react-navigation/native';

//interface para el objeto del formulario
interface FormLogin {
    username: string;
    password: string;
}

//INTERFACE PATRA LOS OBJETOS DE MI ARREGLO USERS
interface User {
    id: number;
    name: string;
    username: string;
    password: string;
}
//ARREGLO CON LA LISTA DE USUARIOS
const users: User[] = [
    { id: 1, name: 'Gerson Teran', username: 'GuapyGT', password: '123456' },
    { id: 2, name: 'Kennet Gerardo', username: 'Kenflow', password: '567890' }
];

export const LoginScreen = () => {
    //hook useNavigation para navegar entre pantallas
    const navigation = useNavigation();
    //hook useState para manejar el estado del formulario
    //trabajar formularios como objetos
    const [formLogin, setFormLogin] = useState<FormLogin>({
        username: '',
        password: ''
    });

    //hook useState para maejar el estado de la contraseña
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true)

    //funcion para modificar el estado del formulario - property es e valor de la constante a modificar
    const changeForm = (property: string, value: string): void => {
        //console.log(property + ': ' + value)
        //sacar una copia para hacer la modificacion
        setFormLogin({ ...formLogin, [property]: value });
    }

    //FUNCION PARA VALIDAR EL USUSARIO Y CONTRASEÑA
    const verifyUser = (): User | undefined => {
        const existUser= users.find(user => user.username == formLogin.username && user.password == formLogin.password);
        return existUser;
    }
    //funcion para permitir iniciar sesion
    const handleLogin = (): void => {
        if (formLogin.username == '' || formLogin.password == '') {
            Alert.alert('Error', 'Ingrese su usuario y contraseña')
            return; //si falta algun campo nos saca del flujo regresar al principio
        }
        if(!verifyUser()){
            Alert.alert('Error', 'Usuario y/o conytraseña incorrectos')
            return;
        }
        console.log(formLogin);
        }
        
    

    return (
        <View >
            <StatusBar backgroundColor={PRYIMARY_COLOR} />
            <TitleComponent title='Iniciar sesión' />
            <BodyComponent>
                <Text style={styles.titleWelcome}>Bienvenido de nuevo!</Text>
                <Text style={styles.textDecription}>Realiza tus compras de manera rápida y segura.</Text>
                <View style={styles.containerForm}>
                    <InputComponent placeholder='Usuario' keyboardType='default' changeForm={changeForm} property='username' />
                    <InputComponent placeholder='Contraseña' keyboardType='default' changeForm={changeForm} property='password' isPassword={hiddenPassword} />
                    <Icon
                        name={hiddenPassword ? 'visibility' : 'visibility-off'}

                        size={20} color={PRYIMARY_COLOR}
                        style={styles.iconForm}
                        onPress={() => setHiddenPassword(!hiddenPassword)} />
                </View>
                
                    <ButtonComponent text='Ingresar' handleLogin={handleLogin} />
                    {/* <ButtonComponent text='Registrate' handleLogin={()=> navigation.dispatch(CommonActions.navigate({name:'Register'}))}/> */}
                    <TouchableOpacity onPress={()=> navigation.dispatch(CommonActions.navigate({name: 'Register'}))}>
                        <Text style={styles.textRedirect}>No tienes una cuenta? Regístrate ahora</Text>
                    </TouchableOpacity>
                
            </BodyComponent>
        </View>
    )
}
