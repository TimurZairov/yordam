import React from 'react';
import {Text, View} from 'react-native';
import Header from '../../Components/Header';
import styles from './style';

const ErrorScreen = ({error}) => {
  console.log(error);
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

export default ErrorScreen;
