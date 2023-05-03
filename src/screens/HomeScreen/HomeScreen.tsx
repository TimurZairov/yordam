import React from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './style';
import Header from '../../Components/Header';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
