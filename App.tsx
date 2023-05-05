import React from 'react';
// import MapScreen from './src/screens/MapScreen';
// import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/Auth/LoginScreen/LoginScreen';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();

const App = () => {
  return <LoginScreen />;
};

export default App;
