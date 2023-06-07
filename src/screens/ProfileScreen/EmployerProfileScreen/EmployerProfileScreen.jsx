import React, {useContext} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

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
  console.log(userData.Posts.items);
  const editProfileHandler = () => {
    navigation.navigate('EditProfileScreen', {user: userData});
  };

  return (
    <View style={styles.container}>
      <Header profile onPress={editProfileHandler} />
      <FlatList
        data={userData?.Posts.items}
        ListHeaderComponent={() => {
          return (
            <>
              <UserInfo
                userName={userData.name}
                userLocation={userData.location}
                imageURL={userData.image}
              />
              <UserData name={'Почта'} info={userData.email} />
              <UserData name={'Телефон'} info={userData.phoneNumber} />
              <UserData name={'Я работодатель'} info={userData.employer} />
              <Text style={styles.comments}>Ваши посты</Text>
            </>
          );
        }}
        renderItem={({item}) => {
          return (
            <View style={styles.commentContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.commentName}>{item.title}</Text>
                <Text style={styles.commentName}>{item.price}</Text>
                <Text style={styles.commentText}>{item.description}</Text>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default EmployerProfileScreen;
