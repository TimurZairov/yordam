import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Switch, Text, View} from 'react-native';

import {AppContext} from '../../../context/Context';
import {deletePost, getUser, updateUser} from './queries';
import {useMutation, useQuery} from '@apollo/client';
import UserData from '../../../Components/UserData';
import {useNavigation} from '@react-navigation/native';

import Header from '../../../Components/Header';
import styles from './style';
import UserInfo from '../../../Components/UserInfo';
import {colors, mainColors} from '../../../theme/colors';
import ErrorScreen from '../../ErrorScreen';
import Card from '../../../Components/Card';

const EmployerProfileScreen = () => {
  const navigation = useNavigation();
  const {userId, setSwitchRole, switchRole} = useContext(AppContext);
  const [switchLoading, setSwitchLoading] = useState(false);
  //Delete POST
  const [onDeletePost] = useMutation(deletePost);
  //delete post
  const postDelete = async (id, version) => {
    try {
      await onDeletePost({
        variables: {input: {id, _version: version}},
      });
    } catch (e) {
      console.log(e);
    }
  };

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
        variables: {
          input: {id, employer: !switchRole, _version: version},
          refetchQueries: ['getUser'],
        },
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

  // USER QUERY
  const {data, loading, error} = useQuery(getUser, {
    variables: {
      id: userId,
    },
    pollInterval: 500,
  });
  if (error) {
    return <ErrorScreen error={error.message} />;
  }

  if (loading || switchLoading) {
    return (
      <ActivityIndicator style={styles.activity} color={colors.purpleColor} />
    );
  }

  const userData = data.getUser;

  //Edit Profile Screen
  const editProfileHandler = () => {
    navigation.navigate('EditProfileScreen', {user: userData});
  };

  const postedPost = userData?.Posts.items.filter(post => !post._deleted);

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
                postNum={postedPost.length || 0}
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
