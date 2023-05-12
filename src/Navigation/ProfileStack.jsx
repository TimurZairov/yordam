import React from 'react';
import {createNativeStackNavigator} from 'react-navigation/native-stack';
import EmployerProfileScreen from '../screens/ProfileScreen/EmployerProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={EmployerProfileScreen} />
      <Stack.Screen name="EditScreen" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
