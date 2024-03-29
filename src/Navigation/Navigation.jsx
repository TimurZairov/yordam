import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AboutScreen from '../screens/AboutScreen';
import TabNavigation from './TabNavigation';
import CustomDrawerNavigation from '../Components/CustomDrawerNavigation/CustomDrawerNavigation';
import JobAppliedScreen from '../screens/JobAppliedScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotifications from '../utils/PushNotifications';
import MessageScreen from '../screens/MessageScreen/MessageScreen';

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
  const [welcome, setWelcome] = useState(false);
  //Check AsyncStorage

  useEffect(() => {
    const checkUser = async () => {
      const isUserReadWelcome = await AsyncStorage.getItem('user');
      if (isUserReadWelcome) {
        setWelcome(true);
      }
    };
    checkUser();
  }, []);

  return (
    <NavigationContainer linking={linking}>
      <PushNotifications />
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Welcome'}
        drawerContent={props => <CustomDrawerNavigation {...props} />}>
        {!welcome && <Drawer.Screen name="Welcome" component={WelcomeScreen} />}
        <Drawer.Screen name="Tab" component={TabNavigation} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Applied" component={JobAppliedScreen} />
        <Drawer.Screen name="Message" component={MessageScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
