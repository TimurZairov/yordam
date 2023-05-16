import 'react-native-gesture-handler';
import React from 'react';
import {enableLatestRenderer} from 'react-native-maps';
import {Amplify} from 'aws-amplify';
import awsExports from './src/aws-exports';
import Navigation from './src/Navigation';

Amplify.configure(awsExports);

enableLatestRenderer();

const App = () => {
  return <Navigation />;
};

export default App;
