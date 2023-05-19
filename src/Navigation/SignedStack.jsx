import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import ProfileStack from './ProfileStack';
import {AppContext} from '../context/Context';

const Stack = createNativeStackNavigator();

const SignedStack = () => {
  const {user} = useContext(AppContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!user ? (
        <Stack.Screen name={'Authenticate'} component={AuthStack} />
      ) : (
        <Stack.Screen name={'Authenticated'} component={ProfileStack} />
      )}
    </Stack.Navigator>
  );
};

export default SignedStack;
