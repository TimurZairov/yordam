import React from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './style';
import Header from '../../Components/Header/';
import TabButton from '../../Components/TabButton';
import PostsList from '../../Components/PostsList';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.saveArea}>
      <View style={styles.container}>
        {/*Header*/}
        <Header />
        {/*TabButton*/}
        <View style={styles.tabContainer}>
          <TabButton title={'Объявления'} active={'post'} />
        </View>
        {/*Posts*/}
        <PostsList />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(HomeScreen);
