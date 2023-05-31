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
import {colors} from '../../../theme/colors';
import ErrorScreen from '../../ErrorScreen';

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
    return <ErrorScreen error={error.message} />;
  }

  if (loading) {
    return (
      <ActivityIndicator style={styles.activity} color={colors.purpleColor} />
    );
  }

  const userData = data.getUser;
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
      <UserData name={'Почта'} info={userData.email} />
      <UserData name={'Телефон'} info={userData.phoneNumber} />
      <UserData name={'Я работодатель'} info={userData.employer} />
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
