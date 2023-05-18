import React from 'react';
import {colors} from '../theme/colors';
import HomeStack from './HomeStack';
import {
  AddIcon,
  HomeIcon,
  MapIcon,
  MessageIcon,
  ProfileIcon,
} from '../assets/icons';
import MapScreen from '../screens/MapScreen';
import CreateScreen from '../screens/CreateScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AuthStack from './AuthStack';
import MessageScreen from '../screens/MessageScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.purpleColor,
        tabBarInactiveTintColor: colors.blackColor,
        tabBarStyle: {
          height: 60,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}>
      {/*  HOME*/}
      <Tab.Screen
        name={'Home'}
        component={HomeStack}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused, color}) => {
            return (
              <HomeIcon
                height={30}
                fill={focused ? color : colors.blackColor}
              />
            );
          },
        }}
      />
      {/*MAP*/}
      <Tab.Screen
        name={'Map'}
        component={MapScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => {
            return <MapIcon height={30} fill={color} />;
          },
        }}
      />
      {/*CREATE*/}

      <Tab.Screen
        name={'Create'}
        component={CreateScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => {
            return <AddIcon height={47} fill={color} />;
          },
        }}
      />

      {/*Message*/}
      <Tab.Screen
        name={'Message'}
        component={MessageScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => {
            return <MessageIcon height={30} fill={color} />;
          },
        }}
      />
      {/*Profile*/}
      <Tab.Screen
        name={'Auth'}
        component={AuthStack}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => {
            return <ProfileIcon height={30} fill={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
