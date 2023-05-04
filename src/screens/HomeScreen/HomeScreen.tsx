import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './style';
import Header from '../../Components/Header';
import TabButton from '../../Components/TabButton';
import Card from '../../Components/Card/';
import TabFilter from '../../Components/TabFilter';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/*Header*/}
        <Header />
        {/*TabButton*/}
        <View style={styles.tabContainer}>
          <TabButton title="Объявления" active />
          <TabButton title="Объявления" active />
        </View>
        <Text style={styles.title}>Популярные</Text>
        {/*TabFilter*/}
        <View style={styles.scrollView}>
          <TabFilter />
        </View>
        {/*Card*/}
        <Card />
        <Card />
        <Card />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
