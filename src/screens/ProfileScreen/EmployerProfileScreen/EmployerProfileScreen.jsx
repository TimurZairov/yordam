import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Switch, Text, View} from 'react-native';

import {AppContext} from '../../../context/Context';
import {getUser, updateNotification, updateUser} from './queries';
import {useMutation, useQuery} from '@apollo/client';
import UserData from '../../../Components/UserData';
import {useNavigation} from '@react-navigation/native';

import Header from '../../../Components/Header';
import styles from './style';
import UserInfo from '../../../Components/UserInfo';
import {colors, mainColors} from '../../../theme/colors';
import ErrorScreen from '../../ErrorScreen';
import Card from '../../../Components/Card';
import {NotificationContext} from '../../../context/NotificationContext/NotificationContext';

const EmployerProfileScreen = () => {
  const navigation = useNavigation();
  const {userId, setSwitchRole, switchRole} = useContext(AppContext);
  const {postIds, newNotification} = useContext(NotificationContext);
  const [doUpdateNotification] = useMutation(updateNotification);

  const [switchLoading, setSwitchLoading] = useState(false);

  // get Role
  const [onUpdateUserProfile] = useMutation(updateUser);
  //switch
  const switchHandler = () => {
    setSwitchRole(!switchRole);
  };

  // toggle switch
  const toggleSwitch = async (id, version) => {
    if (switchLoading) {
      return;
    }
    try {
      setSwitchLoading(true);

      await onUpdateUserProfile({
        variables: {input: {id, employer: !switchRole, _version: version}},
      });
      switchHandler();
    } catch (e) {
      console.log(e);
    } finally {
      setSwitchLoading(false);
    }
  };
  //setSwitch
  useEffect(() => {
    if (userData) {
      setSwitchRole(userData.employer);
    }
  }, [switchRole, toggleSwitch]);

  useEffect(() => {
    const unreadNotification = newNotification.filter(n => !n?.readAt);
    Promise.all(
      unreadNotification.map(n => {
        n &&
          doUpdateNotification({
            variables: {
              input: {
                id: n?.id,
                _version: n?._version,
                readAt: new Date().getTime(),
              },
            },
          });
      }),
    );
  }, []);

  // USER QUERY User
  const {data, loading, error} = useQuery(getUser, {
    variables: {
      id: userId,
    },
    pollInterval: 500,
  });

  //check
  if (error) {
    return <ErrorScreen error={error.message} />;
  }

  if (loading || switchLoading) {
    return (
      <ActivityIndicator style={styles.activity} color={colors.purpleColor} />
    );
  }
  //read notification in profile

  const userData = data.getUser;

  // const isEnableHandler = (arr1, arr2) => {
  //   for (let i = 0; i < arr1.length; i++) {
  //     console.log(arr1[i]);
  //   }
  //   const check = arr2?.filter(item => {
  //     console.log(item.id);
  //   });
  // };
  //
  // isEnableHandler(postIds, posts);
  //Edit Profile Screen
  const editProfileHandler = () => {
    navigation.navigate('EditProfileScreen', {user: userData});
  };
  return (
    <View style={styles.container}>
      <Header profile onPress={editProfileHandler} />
      <FlatList
        data={(userData?.Posts.items || []).filter(post => !post._deleted)}
        ListHeaderComponent={() => {
          return (
            <>
              <UserInfo
                userName={userData.name}
                userLocation={userData.location}
                postNum={0}
                userData={userData}
              />
              <UserData name={'Почта'} info={userData.email} />
              <UserData name={'Телефон'} info={userData.phoneNumber} />
              <View style={styles.userData}>
                <Text style={styles.userText}>Я работодатель</Text>
                <Switch
                  trackColor={{false: mainColors.grayColor, true: '#81b0ff'}}
                  thumbColor={mainColors.mainColor}
                  value={userData.employer}
                  onValueChange={() =>
                    toggleSwitch(userData.id, userData._version)
                  }
                />
              </View>

              <Text style={styles.comments}>
                {userData?.Posts.items.length
                  ? 'Ваши посты'
                  : 'У Вас нет постов'}
              </Text>
            </>
          );
        }}
        renderItem={({item}) => {
          return (
            <View>
              <Card post={item} userProfile={true} />
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
