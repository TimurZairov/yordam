import {enableLatestRenderer} from 'react-native-maps';
import 'react-native-gesture-handler';
import React from 'react';
import {Amplify} from 'aws-amplify';
import awsConfig from './src/aws-exports';
import Navigation from './src/Navigation';

Amplify.configure(awsConfig);

enableLatestRenderer();

const App = () => {
  return (
        <Navigation />
  );
};

export default App;

//DEFAULT CONFIG aws

// const signUpConfig = {
//   hideAllDefaultFields: true,
//   signUpFields: [
//     {
//       label: 'Name',
//       key: 'name',
//       required: true,
//       displayOrder: 1,
//       type: 'string',
//       placeholder: 'Name',
//     },
//   ],
// };

// export default withAuthenticator(App, {signUpConfig});
