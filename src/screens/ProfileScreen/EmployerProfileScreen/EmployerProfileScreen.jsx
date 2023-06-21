import React, {useContext, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Pressable,
  Switch,
  Text,
  View,
} from 'react-native';

import {AppContext} from '../../../context/Context';
import {deletePost, getUser} from './queries';
import {useMutation, useQuery} from '@apollo/client';
import UserData from '../../../Components/UserData';
import {useNavigation} from '@react-navigation/native';

import Header from '../../../Components/Header';
import styles from './style';
import UserInfo from '../../../Components/UserInfo';
import {colors} from '../../../theme/colors';
import ErrorScreen from '../../ErrorScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EmployerProfileScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const navigation = useNavigation();
  const {userId} = useContext(AppContext);
  //Delete POST
  const [onDeletePost] = useMutation(deletePost);

  const postDelete = async (id, version) => {
    try {
      const response = await onDeletePost({
        variables: {input: {id, _version: version}},
      });
    } catch (e) {
      console.log(e);
    }
  };

  //EDit Post
  const editPostHandler = id => {
    navigation.navigate('UpdatePost', {id: id});
  };

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

  if (loading) {
    return (
      <ActivityIndicator style={styles.activity} color={colors.purpleColor} />
    );
  }

  const userData = data.getUser;

  const editProfileHandler = () => {
    navigation.navigate('EditProfileScreen', {user: userData});
  };

  const deletePostHandler = (id, version) => {
    Alert.alert('Удалить?', '', [
      {
        text: 'Отмена',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Удалить',
        onPress: () => postDelete(id, version),
        style: 'destructive',
      },
    ]);
  };

  const toggleSwitch = async e => {
    console.log(e);

    setIsEnabled(!isEnabled);
  };

  useEffect(() => {
    const checkRoleHandler = async () => {
      const res = await AsyncStorage.getItem('profile');
      if (res) {
        setIsEnabled(JSON.parse(res));
      }
    };
    checkRoleHandler();
  }, []);

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
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={colors.purpleColor}
                  value={isEnabled}
                  onChange={toggleSwitch}
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
            <View style={styles.commentContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.commentName}>{item.title}</Text>
                <Text style={styles.commentName}>{item.price}</Text>
                <Text style={styles.commentText}>{item.description}</Text>
              </View>
              <Pressable
                style={styles.postBtn}
                onPress={() => deletePostHandler(item.id, item._version)}>
                <Text style={styles.btnText}>Удалить</Text>
              </Pressable>
              <Pressable
                style={styles.postBtn}
                onPress={() => editPostHandler(item.id)}>
                <Text>Реадактировать</Text>
              </Pressable>
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
