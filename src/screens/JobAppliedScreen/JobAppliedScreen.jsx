import React, {useContext, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './style';
import Header from '../../Components/Header';
import {useRoute} from '@react-navigation/native';
import {AppContext} from '../../context/Context';
import {useMutation, useQuery} from '@apollo/client';
import {commentsByPost, createComment} from './queries';
import {colors} from '../../theme/colors';
import ErrorScreen from '../ErrorScreen';

const JobAppliedScreen = () => {
  const [comment, setComment] = useState('');
  const {userId} = useContext(AppContext);
  const route = useRoute();
  const {id} = route.params;

  //create Comment
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
      setComment('');
      Keyboard.dismiss;
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
        <Header />
        <FlatList
          data={comments}
          renderItem={({item}) => {
            return (
              <View style={styles.commentContainer}>
                <View>
                  <View style={styles.avatar}></View>
                </View>
                <Text>{item.comment}</Text>
              </View>
            );
          }}
          ListEmptyComponent={() => {
            return (
              <Text style={styles.emptyList}>
                Будьте первым кто откликнулся
              </Text>
            );
          }}
        />
      </Pressable>
      <View style={styles.inputContainer}>
        <TextInput
          multiline={true}
          style={styles.input}
          value={comment}
          onChangeText={setComment}
        />
        <Text style={styles.submit} onPress={createCommentHandler}>
          Оправить
        </Text>
      </View>
    </>
  );
};

export default JobAppliedScreen;
