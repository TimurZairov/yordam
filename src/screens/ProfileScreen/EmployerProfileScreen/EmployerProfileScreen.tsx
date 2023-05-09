import React from 'react';
import {Image, Text, View} from 'react-native';
import Header from '../../../Components/Header';
import styles from './style';
import UserInfo from '../../../Components/UserInfo';
import UserData from '../../../Components/UserData';

const EmployerProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <UserInfo />
      <UserData name={'Почта'} userData={'zairovne@gmail.com'} />
      <UserData name={'Телефон'} userData={'+998 99 591 48 83'} />
      <UserData name={'Я работодатель'} />
      <Text style={styles.comments}>Отзывы как о работодателе (2)</Text>

      <View style={styles.commentContainer}>
        <Image
          source={require('../../../assets/images/avatar.png')}
          style={styles.commentImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.commentName}>Мадина</Text>
          <Text style={styles.commentText}>
            Отличный человек, поработал классно, все сразу оплатили, если дает
            работу не сомневайтесь все будет оплачено!
          </Text>
        </View>
      </View>
    </View>
  );
};

export default EmployerProfileScreen;
