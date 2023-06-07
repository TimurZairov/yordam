import React, {useContext} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Pressable,
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

const EmployerProfileScreen = () => {
  //Delete POST
  const [onDeletePost] = useMutation(deletePost);

  const postDelete = async (id, version) => {
    try {
      const response = await onDeletePost({
        variables: {input: {id, _version: version}},
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  //EDit Post

  //  USER QUERY
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
                imageURL={userData.image}
                postNum={postedPost.length || 0}
              />
              <UserData name={'Почта'} info={userData.email} />
              <UserData name={'Телефон'} info={userData.phoneNumber} />
              <UserData name={'Я работодатель'} info={userData.employer} />
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
              <Pressable style={styles.postBtn}>
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
