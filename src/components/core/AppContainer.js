import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../../screens/Login/Login';
import Register from '../../screens/Register';
import Post from '../../screens/Post';
import DetailList from '../../screens/DetailList';

const Stack = createStackNavigator();

const AppContainer = () => {
    return (
        <NavigationContainer> 
            <Stack.Navigator headerMode="none" >
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>  
            <Stack.Screen name="Post" component={Post}/> 
            <Stack.Screen name="DetailList" component={DetailList}/> 
            </Stack.Navigator>
        </NavigationContainer>
        )
}

export default AppContainer