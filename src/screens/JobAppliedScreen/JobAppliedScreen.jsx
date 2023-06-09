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
import styles from './style';
import Header from '../../Components/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AppContext} from '../../context/Context';
import {useMutation, useQuery} from '@apollo/client';
import {commentsByPost, createComment} from './queries';
import {colors} from '../../theme/colors';
import ErrorScreen from '../ErrorScreen';
import Button from '../../Components/Button';

const JobAppliedScreen = () => {
  const [isApplied, setIsApplied] = useState(false);
  const [comment, setComment] = useState('');
  const {userId} = useContext(AppContext);
  const route = useRoute();
  const navigation = useNavigation();
  const {id} = route.params;
  //Render Item component
  const renderItem = ({item}) => {
    return (
      <View style={styles.commentContainer}>
        <View>
          <View style={styles.avatar}></View>
        </View>
        <Text>{item.comment}</Text>
      </View>
    );
  };

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
        <Header />
        <FlatList
          data={comments}
          renderItem={renderItem}
          ListEmptyComponent={() => {
            return (
              <Text style={styles.emptyList}>
                Будьте первым кто откликнулся
              </Text>
            );
          }}
        />
      </Pressable>
      {isApplied ? (
        <Button title={'На главную'} onPress={goToMainHandler} />
      ) : (
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
      )}
    </>
  );
};

export default JobAppliedScreen;
