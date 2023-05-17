import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// @ts-ignore
import LoginScreen from '../screens/Auth/LoginScreen';
import RegistryScreen from '../screens/Auth/RegistryScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Login'} component={LoginScreen} />
      <Stack.Screen name={'Registry'} component={RegistryScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
