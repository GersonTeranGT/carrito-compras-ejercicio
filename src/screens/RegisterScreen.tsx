import React, { useState } from 'react'
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { PRYIMARY_COLOR } from '../commons/constants'
import { TitleComponent } from '../components/TitleComponent'
import { BodyComponent } from '../components/BodyComponent'
import { styles } from '../theme/appTheme'
import { InputComponent } from '../components/InputComponent'
import { Icon } from 'react-native-vector-icons/Icon'
import { ButtonComponent } from '../components/ButtonComponent'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { User } from '../navigator/StackNavigator'
//interfaz para las propiedades
interface Props {
    users: User[];
    addUser: (user: User) => void;
}


//interface para el morfulario de registro
interface FormRegister {
    name: string;
    username: string;
    password: string;
}

export const RegisterScreen = ({ users, addUser }: Props) => {
    //hook para navegacion entre pantallas
    const navigation = useNavigation();

    //hook useStATE para manejar el estado del formulario
    const [formRegister, setFormRegister] = useState<FormRegister>({
        name: '',
        username: '',
        password: '',
    })
    //Funcion para modificar el estado del formularios
    const changeForm = (property: string, value: string): void => {
        //modificar el estado del formulario, llaves por ser objeto y trabajar con copias
        setFormRegister({ ...formRegister, [property]: value });
    }

    //funcion para verificar si existe el usuario
    const verifyUserName =(): User | undefined=>{
        const existUserName = users.find(user => user.username == formRegister.username);
        return existUserName;
    }

    //fucion para generar el ID de los nuevos usuarios
    const getIdUser = ():number => {
        const getId =  users.length + 1;    //devuelve el numero de elementos del arreglo
        return getId;
    }

    //funcion para permitir registro
    const handleSignUp = (): void => {
        if (formRegister.name === '' || formRegister.username === '' || formRegister.password === '') {
            Alert.alert('Error', 'Por favor, complete todos los campos.')
            return;
        }

        //verificar que no exista el usuario
        if(verifyUserName() != undefined){
            Alert.alert('Error', 'El usuario ya existe')
            return;
        }

        //crear el nuevo Usuario(objeto)
        const newUser: User={
            id: getIdUser(),
            name: formRegister.name,
            username: formRegister.username,
            password: formRegister.password
        }

        //agregar el nuevo usuareio en el arreglo
        addUser(newUser);
        Alert.alert('Éxito', 'Usuario regisrado correctamente');
        navigation.goBack();
        //console.log(formRegister);
    }
    return (
        <View>
            <StatusBar backgroundColor={PRYIMARY_COLOR} />
            <TitleComponent title='Registrate' />
            <BodyComponent>
                <Text style={styles.titleWelcome}>Sumergete en el mundo de las compras.</Text>
                <Text style={styles.textDecription}>Realiza tus compras de manera rápida y segura.</Text>
                <View>
                    <InputComponent placeholder='Nombre' keyboardType='default' changeForm={changeForm} property='name' />
                    <InputComponent placeholder='Usuario' keyboardType='default' changeForm={changeForm} property='username' />
                    <InputComponent placeholder='Contraseña' keyboardType='default' changeForm={changeForm} property='password' />
                </View>
                <ButtonComponent text='Registrar' onPress={handleSignUp} />
                <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.goBack)}>
                    <Text style={styles.textRedirect}>Ya tienes una cuenta? Iniciar sesión ahora</Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    )
}
