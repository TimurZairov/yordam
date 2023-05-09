import React from 'react';
// import MapScreen from './src/screens/MapScreen';
// import HomeScreen from './src/screens/HomeScreen';
// import LoginScreen from './src/screens/Auth/LoginScreen/LoginScreen';
import EmployerProfileScreen from './src/screens/ProfileScreen/EmployerProfileScreen';
// import RegistryScreen from './src/screens/Auth/RegistryScreen';
// import WelcomeScreen from './src/screens/WelcomeScreen';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();

const App = () => {
  return <EmployerProfileScreen />;
};

export default App;
