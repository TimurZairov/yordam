import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AboutScreen from '../screens/AboutScreen';
import TabNavigation from './TabNavigation';

const Drawer = createDrawerNavigator();

const linking = {
  prefixes: ['yordam://'],
  config: {
    initialRouteName: 'HomeScreen',
    screens: {
      JobDetailsScreen: 'Details',
    },
  },
};

const Navigation = () => {
  return (
    <NavigationContainer linking={linking}>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Screen name="Tab" component={TabNavigation} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
