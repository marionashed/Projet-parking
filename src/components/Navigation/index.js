import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../../screens/SignInScreen/SignInScreen';
import Home from '../../screens/home';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
   <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name = "Authentification" component={SignInScreen} screenOptions={{headerShown:true}}/>

        <Stack.Screen name = "Contrôle parking" component={Home} screenOptions={{headerShown:false}}/>

        </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigation 