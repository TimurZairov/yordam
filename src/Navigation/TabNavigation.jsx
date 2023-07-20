import React, {useEffect, useState} from 'react';
import {mainColors} from '../theme/colors';
import HomeStack from './HomeStack';
import {
  AddIcon,
  HomeIcon,
  MapIcon,
  MessageIcon,
  ProfileIcon,
} from '../assets/icons';
import MapScreen from '../screens/MapScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MessageScreen from '../screens/MessageScreen';
import SignedStack from './SignedStack';
import CreateStack from './CreateStack';
import useGetRole from '../utils/custom/useGetRole';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const [isChecked] = useGetRole();
  const [userRole, setUserRole] = useState(null);

  // Custom hook
  useEffect(() => {
    setUserRole(isChecked);
  }, [isChecked]);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: mainColors.mainColor,
        tabBarInactiveTintColor: mainColors.grayColor,
        tabBarStyle: {
          height: 60,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: mainColors.whiteColor,
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
                fill={focused ? color : mainColors.grayColor}
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

      {userRole ? (
        <Tab.Screen
          name={'Create'}
          component={CreateStack}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({color}) => {
              return <AddIcon height={47} fill={color} />;
            },
          }}
        />
      ) : null}

      {/*Message*/}
      <Tab.Screen
        name={'Message'}
        component={MessageScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => {
            return <MessageIcon height={30} fill={color} />;
          },
          tabBarHideOnKeyboard: true,
        }}
      />
      {/*Profile*/}
      <Tab.Screen
        name={'Auth'}
        component={SignedStack}
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
