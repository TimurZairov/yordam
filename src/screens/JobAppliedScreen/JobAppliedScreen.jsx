import React, {useContext, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import relativeTime from 'dayjs/plugin/relativeTime';
import styles from './style';
import Header from '../../Components/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AppContext} from '../../context/Context';
import {useMutation, useQuery, useSubscription} from '@apollo/client';
import {commentsByPost, createComment, onCommentByPostId} from './queries';
import {colors, mainColors} from '../../theme/colors';
import ErrorScreen from '../ErrorScreen';
import Button from '../../Components/Button';
import dayjs from 'dayjs';
import {DefaultAvatar, SendIcon} from '../../assets/icons';
import useNotificationService from '../../utils/Notifications/useNotificationService';

const JobAppliedScreen = () => {
  const [isApplied, setIsApplied] = useState(false);
  const [newComments, setNewComments] = useState([]);
  const [comment, setComment] = useState('');
  const {userId} = useContext(AppContext);
  const route = useRoute();
  const navigation = useNavigation();
  const {id, myJob = false, jobPost} = route.params;
  const {doCreateNotification} = useNotificationService({
    post: jobPost,
    userId,
  });
  //dayjs for time
  dayjs.extend(relativeTime);

  //Render Item component
  const renderItem = ({item}) => {
    return (
      <View style={styles.commentContainer}>
        <View>
          <View style={styles.avatar}>
            <DefaultAvatar width={35} fill={mainColors.gray} />
          </View>
        </View>
        <View>
          <Text style={styles.name}>{item?.User.name}</Text>
          <Text>{item.comment}</Text>
          <Text>{dayjs(item.createdAt).fromNow()}</Text>
        </View>
      </View>
    );
  };

  //subscription

  const {data: newCommentsData} = useSubscription(onCommentByPostId, {
    variables: {postID: id},
  });

  useEffect(() => {
    if (newCommentsData?.onCommentByPostId) {
      setNewComments(existingComments => [
        newCommentsData?.onCommentByPostId,
        ...existingComments,
      ]);
    }
  }, [newCommentsData]);

  //create Comment & refetch
  const [doCreateComment] = useMutation(createComment, {
    refetchQueries: ['CommentsByPost'],
  });

  const createCommentHandler = async () => {
    try {
      await doCreateComment({
        variables: {
          input: {
            comment,
            userID: userId,
            postID: id,
          },
        },
      });
      //create notification
      await doCreateNotification();
      setComment('');
      Keyboard.dismiss;
      setIsApplied(true);
    } catch (e) {
      console.log(e);
    }
  };
  //query Comments
  const {data, loading, error} = useQuery(commentsByPost, {
    variables: {
      postID: id,
    },
  });

  useEffect(() => {
    //check ID User
    if (comments.length) {
      comments.map(item => {
        if (userId !== item.User.id) {
          setIsApplied(false);
        } else {
          setIsApplied(true);
        }
      });
    }
    return () => {
      setIsApplied(false);
    };
  }, [loading, createCommentHandler]);

  const goToMainHandler = () => {
    navigation.navigate('HomeScreen');
  };

  const comments = data?.commentsByPost?.items || [];
  if (loading) {
    return <ActivityIndicator color={colors.purpleColor} />;
  }

  if (error) {
    return <ErrorScreen error={error.message} />;
  }

  return (
    <>
      <Pressable style={styles.container} onPress={Keyboard.dismiss}>
        <Header job />
        <FlatList
          data={[...newComments, ...comments]}
          renderItem={renderItem}
          ListEmptyComponent={() => {
            return (
              <Text style={styles.emptyList}>
                {!myJob
                  ? 'Будьте первым кто откликнулся'
                  : 'Еще никто не откликнулся'}
              </Text>
            );
          }}
        />
        {isApplied && <Button title={'На главную'} onPress={goToMainHandler} />}
      </Pressable>
      {!myJob && (
        <View>
          {!isApplied && (
            <View style={styles.inputContainer}>
              <TextInput
                multiline={true}
                style={styles.input}
                value={comment}
                onChangeText={setComment}
              />
              <Pressable style={styles.submit} onPress={createCommentHandler}>
                <SendIcon fill={mainColors.mainColor} width={30} />
              </Pressable>
            </View>
          )}
        </View>
      )}
    </>
  );
};

export default JobAppliedScreen;
