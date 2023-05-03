import React from 'react';
import {Text, View} from 'react-native';
import {Logo} from '../../assets/icons/index';

const pressed = () => {
  console.warn('pressed');
};

const HomeScreen = () => {
  return (
    <View>
      <Text>Home</Text>
      <Logo width={65} height={65} fill={'#6E64BD'} onPress={pressed} />
    </View>
  );
};

export default HomeScreen;
