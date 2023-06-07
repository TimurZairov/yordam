import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EmployerProfileScreen from '../screens/ProfileScreen/EmployerProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import EditPostScreen from '../screens/EditPostScreen';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProfileScreen" component={EmployerProfileScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Stack.Screen name="UpdatePost" component={EditPostScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
