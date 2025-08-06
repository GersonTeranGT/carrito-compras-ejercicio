import React, { useState } from 'react'
import { StatusBar, Text, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent'
import { PRYIMARY_COLOR } from '../commons/constants';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';

//interface para el objeto del formulario
interface FormLogin {
    username: string;
    password: string;
}

export const LoginScreen = () => {
    //hook useState para manejar el estado del formulario
    //trabajar formularios como objetos
    const [formLogin, setFormLogin] = useState<FormLogin>({
        username: '',
        password: ''
    });

    //funcion para modificar el estado del formulario - property es e valor de la constante a modificar
    const changeForm = (property: string, value: string): void => {
        //console.log(property + ': ' + value)
        //sacar una copia para hacer la modificacion
        setFormLogin({...formLogin, [property]:value});
    }

    //funcion para permitir inicaie sesion
    const handleLogin = (): void =>{
        console.log(formLogin);
    }

    return (
        <View >
            <StatusBar backgroundColor={PRYIMARY_COLOR} />
            <TitleComponent title='Iniciar seción' />
            <BodyComponent>
                <Text style={styles.titleWelcome}>Bienvenido de nuevo!</Text>
                <Text style={styles.textDecription}>Realiza tus compras de manera rápida y segura.</Text>
                <View style={styles.containerForm}>
                    <InputComponent placeholder='Usuario' keyboardType='default' changeForm={changeForm} property='username' />
                    <InputComponent placeholder='Contraseña' keyboardType='numeric' changeForm={changeForm} property='password' isPassword={true}/>
                </View>
                <View style={styles.contenedorBotones}>
                    <ButtonComponent text='Ingresar' handleLogin={handleLogin}/>
                </View>
            </BodyComponent>
        </View>
    )
}
