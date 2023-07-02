import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AboutScreen from '../screens/AboutScreen';
import TabNavigation from './TabNavigation';
import CustomDrawerNavigation from '../Components/CustomDrawerNavigation/CustomDrawerNavigation';
import JobAppliedScreen from '../screens/JobAppliedScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

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
  const [check, setCheck] = useState(null);
  //Check AsyncStorage

  useEffect(() => {
    const checkedHandler = async () => {
      try {
        const isChecked = await AsyncStorage.getItem('profile');
        if (isChecked) {
          setCheck(true);
        } else {
          setCheck(false);
        }
      } catch (e) {
        console.log(e);
      }
    };
    checkedHandler();
  }, []);

  return (
    <NavigationContainer linking={linking}>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Tab'}
        drawerContent={props => <CustomDrawerNavigation {...props} />}>
        <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        <Drawer.Screen name="Tab" component={TabNavigation} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Applied" component={JobAppliedScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
