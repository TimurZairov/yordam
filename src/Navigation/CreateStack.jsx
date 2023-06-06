import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateScreen from '../screens/CreateScreen';
import GetLocationScreen from '../screens/GetLocationScreen';

const Stack = createNativeStackNavigator();

const CreateStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'CreateScreen'} component={CreateScreen} />
      <Stack.Screen name={'Location'} component={GetLocationScreen} />
    </Stack.Navigator>
  );
};

export default CreateStack;
