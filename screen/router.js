import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useMyContextController } from '../store';
import Login from './Login';
import Register from './Register';

import { useNavigation } from '@react-navigation/native';

import Home from './Home';

const Stack = createStackNavigator();

export default function Router() {
    const navigation = useNavigation();
    const [controller, dispatch] = useMyContextController();
    const { userLogin } = controller;
    console.log("f"+userLogin);
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{headerTintColor:'grey',headerTitleAlign:'center' }}>
            <Stack.Screen name='Home' component={Home} options={{
                headerTitle: userLogin ? userLogin.fullname : 'Home'
            }} />
            <Stack.Screen name="Login" component={Login} navigation = {navigation} />
            <Stack.Screen name="Register" component={Register} navigation = {navigation}/>
        </Stack.Navigator>
    );
}