import React from 'react';
import MapScreen from './src/screens/MapScreen';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();

const App = () => {
  return <MapScreen />;
};

export default App;
