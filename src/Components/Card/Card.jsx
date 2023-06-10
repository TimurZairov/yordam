import React from 'react';
import {ActivityIndicator, Image, Pressable, Text, View} from 'react-native';
import styles from './style';
import {ArrowRightIcon} from '../../assets/icons';
import {colors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {useQuery} from '@apollo/client';
import {commentsByPost} from './queries';
import ErrorScreen from '../../screens/ErrorScreen';

const Card = ({post}) => {
  const navigation = useNavigation();
  const getJobDetailsHandler = id => {
    navigation.navigate('Details', {id});
  };
  //getComments
  const {data, loading, error} = useQuery(commentsByPost, {
    variables: {
      postID: post.id,
    },
  });

  const numberOfComments = data?.commentsByPost?.items.length || 0;
  console.log(numberOfComments);
  if (loading) {
    return <ActivityIndicator color={colors.purpleColor} />;
  }

  if (error) {
    return <ErrorScreen error={error.message} />;
  }

  return (
    <Pressable
      style={styles.cardContainer}
      onPress={() => getJobDetailsHandler(post.id)}>
      <View style={styles.info}>
        <View style={styles.userInfoContainer}>
          <Image
            source={{
              uri:
                post?.image ||
                'https://abrakadabra.fun/uploads/posts/2021-12/1639614002_3-abrakadabra-fun-p-avatarki-na-vatsap-iz-pinterest-3.jpg',
            }}
            style={styles.userInfoImage}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userInfoText}>{post?.name}</Text>
            <Text style={styles.userInfoText}>
              Дата: <Text style={styles.userText}>{post?.date}</Text>
            </Text>
            <Text style={styles.userInfoText}>
              Локация: <Text style={styles.userText}>{post?.location}</Text>
            </Text>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <View style={styles.price}>
            <Text style={styles.priceTExt}>{post.price}</Text>
          </View>
          <Text style={styles.time}>19:47</Text>
        </View>
      </View>
      <Text style={styles.userJobTitle}>{post?.title}</Text>
      <Text numberOfLines={4}>{post?.description}</Text>
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

        <ArrowRightIcon width={15} fill={colors.purpleColor} />
      </View>
    </Pressable>
  );
};

export default Card;
