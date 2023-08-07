import {enableLatestRenderer} from 'react-native-maps';
import 'react-native-gesture-handler';
import React from 'react';
import {Amplify} from 'aws-amplify';
import awsConfig from './src/aws-exports';
import Navigation from './src/Navigation';
import AppProvider from './src/context/Context';
import Client from './src/apollo/client';
import NotificationContextProvider from './src/context/NotificationContext/NotificationContext';

Amplify.configure(awsConfig);

enableLatestRenderer();

const App = () => {
  return (
    <AppProvider>
      <Client>
        <NotificationContextProvider>
          <Navigation />
        </NotificationContextProvider>
      </Client>
    </AppProvider>
  );
};

export default App;
