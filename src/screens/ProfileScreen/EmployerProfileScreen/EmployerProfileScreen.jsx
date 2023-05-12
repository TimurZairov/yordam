import React from 'react';
import {Image, Text, View} from 'react-native';
import Header from '../../../Components/Header';
import styles from './style';
import UserInfo from '../../../Components/UserInfo';
import UserData from '../../../Components/UserData';
import {useNavigation} from '@react-navigation/native';

const userData = {
  name: 'Матлюба Маматкулова',
  location: 'Ташкент, Ул. Комил-Яшин 2',
  email: 'zairovne@gmail.com',
  phoneNumber: '+998 99 591 48 83',
  image:
    'https://proprikol.ru/wp-content/uploads/2022/06/zhenskie-kartinki-na-avu-31.jpg',
};

const EmployerProfileScreen = () => {
  const navigation = useNavigation();

  const editProfileHandler = () => {
    // navigation.navigate('EditProfile', {user: userData});
    console.log('ok');
  };

  return (
    <View style={styles.container}>
      <Header profile onPress={editProfileHandler} />
      <UserInfo
        userName={userData.name}
        userLocation={userData.location}
        imageURL={userData.image}
      />
      <UserData name={'Почта'} userData={userData.email} />
      <UserData name={'Телефон'} userData={userData.phoneNumber} />
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
