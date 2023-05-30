import React, {useContext} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

import {AppContext} from '../../../context/Context';
import {getUser} from './queries';
import {useQuery} from '@apollo/client';
import UserData from '../../../Components/UserData';
import {useNavigation} from '@react-navigation/native';

import Header from '../../../Components/Header';
import styles from './style';
import UserInfo from '../../../Components/UserInfo';

const EmployerProfileScreen = () => {
  const navigation = useNavigation();
  const {userId} = useContext(AppContext);
  const {data, loading, error} = useQuery(getUser, {
    variables: {
      id: userId,
    },
    pollInterval: 500,
  });
  if (error) {
    return <Text>{error.message}</Text>;
  }

  if (loading) {
    return <ActivityIndicator />;
  }

  const userData = data.getUser;
  console.log(userData);
  const editProfileHandler = () => {
    navigation.navigate('EditProfileScreen', {user: userData});
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
      <UserData name={'Я работодатель'} userData={userData.employer} />
      <Text style={styles.comments}>Ваши посты</Text>

      <View style={styles.commentContainer}>
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
