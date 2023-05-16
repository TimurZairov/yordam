import 'react-native-gesture-handler';
import React from 'react';
import {enableLatestRenderer} from 'react-native-maps';
import {Amplify} from 'aws-amplify';
import awsConfig from './src/aws-exports';
import Navigation from './src/Navigation';

Amplify.configure(awsConfig);

enableLatestRenderer();

const App = () => {
  return <Navigation />;
};

export default App;
