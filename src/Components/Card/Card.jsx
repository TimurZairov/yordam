import React from 'react';
import {
  ActivityIndicator,
  Alert,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import styles from './style';
import {
  ArrowRightIcon,
  CleanIcon,
  RepairIcon,
  TaskIcon,
} from '../../assets/icons';
import {colors, mainColors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {useQuery} from '@apollo/client';
import {commentsByPost} from './queries';
import ErrorScreen from '../../screens/ErrorScreen';

const Card = ({post, userProfile}) => {
  const navigation = useNavigation();
  dayjs.extend(relativeTime);

  const getJobDetailsHandler = id => {
    navigation.navigate('Details', {id, jobPost: post});
  };
  //getComments || number of Comments
  const {data, loading, error} = useQuery(commentsByPost, {
    variables: {
      postID: post.id,
    },
  });

  //navigate to JobApplied Screen

  const goToJobAppliedScreenHandler = id => {
    navigation.navigate('Applied', {id: id, myJob: true});
  };

  //EDit Post
  const editPostHandler = id => {
    navigation.navigate('UpdatePost', {id: id});
  };

  //Alert deleting post
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
  // check how many applied user
  const numberOfComments = data?.commentsByPost?.items.length || 0;

  //check!
  if (loading) {
    return <ActivityIndicator color={colors.purpleColor} />;
  }

  if (error) {
    return <ErrorScreen error={error.message} />;
  }

  return (
    <Pressable
      style={styles.cardContainer}
      onPress={
        !userProfile
          ? () => getJobDetailsHandler(post.id)
          : () => goToJobAppliedScreenHandler(post.id)
      }>
      <View style={styles.info}>
        <View style={styles.userInfoContainer}>
          {post.category === 'Ремонт' ? (
            <RepairIcon style={styles.icon} fill={colors.purpleColor} />
          ) : post.category === 'Уборка' ? (
            <CleanIcon style={styles.icon} fill={colors.purpleColor} />
          ) : (
            <TaskIcon style={styles.icon} fill={colors.purpleColor} />
          )}
          <View style={styles.userInfo}>
            <Text style={styles.userInfoText}>
              Категория: <Text style={styles.userText}>{post?.category}</Text>
            </Text>
            <Text style={styles.userInfoText}>
              Город: <Text style={styles.userText}>{post?.adress}</Text>
            </Text>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <View style={styles.price}>
            <Text style={styles.priceTExt}>{post.price} сум</Text>
          </View>
          <Text style={styles.time}>{dayjs(post?.createdAt).fromNow()}</Text>
        </View>
      </View>
      <Text style={styles.userJobTitle}>{post?.title}</Text>
      <Text numberOfLines={4}>{post?.description}</Text>
      {!userProfile ? (
        <View style={styles.userInfoFooter}>
          {numberOfComments === 0 ? (
            <Text style={styles.usersAgreed}>
              Откликнулись: <Text>Будьте первым</Text>
            </Text>
          ) : (
            <Text style={styles.usersAgreed}>
              Откликнулись: <Text>{numberOfComments} человек</Text>
            </Text>
          )}
          <ArrowRightIcon width={15} fill={mainColors.mainColor} />
        </View>
      ) : null}
      {userProfile && (
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btnRemove}
            onPress={() => deletePostHandler(post.id, post._version)}>
            <Text style={styles.btnText}>Удалить</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => editPostHandler(post.id)}
            style={[styles.btnRemove, {backgroundColor: mainColors.blueColor}]}>
            <Text style={[styles.btnText, {color: mainColors.whiteColor}]}>
              Редактировать
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Pressable>
  );
};

export default Card;
