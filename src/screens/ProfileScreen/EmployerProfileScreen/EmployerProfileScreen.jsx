import React, {useContext, useEffect} from 'react';
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
import {deletePost, getUser, updateUser} from './queries';
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
  const navigation = useNavigation();
  const {userId, setSwitchRole, switchRole} = useContext(AppContext);
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
  // get Role
  const [onUpdateUserProfile] = useMutation(updateUser);

  // toggle switch
  const toggleSwitch = async (id, version) => {
    setSwitchRole(!switchRole);
    try {
      const res = await onUpdateUserProfile({
        variables: {input: {id, employer: !switchRole, _version: version}},
      });
      if (res) {
        const user = res.data.updateUser;
        const userRole = JSON.stringify(user.employer);
        await AsyncStorage.setItem('profile', userRole);
        Alert.alert('Внимание', 'Перезапустите приложение!');
      }
    } catch (e) {
      console.log(e);
    }
  };

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

  if (loading) {
    return (
      <ActivityIndicator style={styles.activity} color={colors.purpleColor} />
    );
  }

  const userData = data.getUser;

  //Edit Profile Screen
  const editProfileHandler = () => {
    navigation.navigate('EditProfileScreen', {user: userData});
  };

  //Alert deleting

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
                  value={switchRole}
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
