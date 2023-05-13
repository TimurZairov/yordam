import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './style';
import {ArrowRightIcon} from '../../assets/icons';
import {colors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';

const Card = ({post}) => {
  const navigation = useNavigation();
  const getJobDetailsHandler = id => {
    console.log(id);
    navigation.navigate('Details');
  };

  return (
    <Pressable
      style={styles.cardContainer}
      onPress={() => getJobDetailsHandler(post.id)}>
      <View style={styles.info}>
        <View style={styles.userInfoContainer}>
          <Image
            source={{
              uri: post?.user.image,
            }}
            style={styles.userInfoImage}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userInfoText}>{post?.user.fullName}</Text>
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
            <Text style={styles.priceTExt}>{post?.price}</Text>
          </View>
          <Text style={styles.time}>19:47</Text>
        </View>
      </View>
      <Text style={styles.userJobTitle}>{post?.title}</Text>
      <Text numberOfLines={4}>{post?.description}</Text>
      <View style={styles.userInfoFooter}>
        <Text style={styles.usersAgreed}>
          Откликнулись: <Text>{post?.applied?.length + 1} человек</Text>
        </Text>
        <ArrowRightIcon width={15} fill={colors.purpleColor} />
      </View>
    </Pressable>
  );
};

export default Card;
