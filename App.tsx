import React from 'react';
// import MapScreen from './src/screens/MapScreen';
// import HomeScreen from './src/screens/HomeScreen';
// import LoginScreen from './src/screens/Auth/LoginScreen/LoginScreen';
import {enableLatestRenderer} from 'react-native-maps';
// import RegistryScreen from './src/screens/Auth/RegistryScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

enableLatestRenderer();

const App = () => {
  return <WelcomeScreen />;
};

export default App;
