import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { PRYIMARY_COLOR } from '../commons/constants';
import { RegisterScreen } from '../screens/RegisterScreen';
import { useState } from 'react';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
//INTERFACE PATRA LOS OBJETOS DE MI ARREGLO USERS
export interface User {
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
const Stack = createStackNavigator();

export const StackNavigator = () => {
    //hook useState permitir gestionar el estado del arreglo de usuarios
    const [listUsers, setListUsers] = useState<User[]>(users)

    //funcion para agregar nuevos usuarios al arreglo (listUsers)
    const addUser = (user: User) => {
        //modificar el estado del arreglo
        setListUsers([...listUsers, user]);
    }
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: PRYIMARY_COLOR
                }
            }}>
            <Stack.Screen name="Login" options={{ headerShown: false }} children={() => <LoginScreen users={listUsers} />} />
            <Stack.Screen name="Register" options={{ headerShown: false }} children={() => <RegisterScreen users={listUsers} addUser={addUser} />} />
            <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        </Stack.Navigator>
    );
}