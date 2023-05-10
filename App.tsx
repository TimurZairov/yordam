import React from 'react';
import {enableLatestRenderer} from 'react-native-maps';

import Navigation from './src/Navigation';

enableLatestRenderer();

const App = () => {
  return <Navigation />;
};

export default App;
