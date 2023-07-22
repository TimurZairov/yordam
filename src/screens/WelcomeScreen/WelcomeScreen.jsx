import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Image, Text, useWindowDimensions, View} from 'react-native';
import styles from './style';
import {Logo} from '../../assets/icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Button from '../../Components/Button';
import {mainColors} from '../../theme/colors';

const WelcomeScreen = () => {
  const {width, height} = useWindowDimensions();
  const content = [
    {
      image: require('../../assets/images/MainImageOne.png'),
      title: 'Услуги для вас',
      description:
        'Усли у вас есть работа котрую необходимо выполнить за определенную\n' +
        'сумму, разместите свою работу и пользователи котрым нужен заработок\n' +
        'будут готовы его выполнить, или же сразу найдите исполнителья из\n' +
        'списка.',
    },
    {
      image: require('../../assets/images/MainImageTwo.png'),
      title: 'Хотите заработать?',
      description:
        'Если вы хотите заработать,\n' +
        'или вам нужна подработка, следите \n' +
        'за последними постами, откликайтесь \n' +
        'комментариями, что бы получить\n' +
        'заказ. Укажите в профиле какие\n' +
        'виды работ вы делаете что бы\n' +
        'вас было легко найти.',
    },
  ];

  const flatListRef = useRef(<FlatList />);
  const [indexScroll, setIndexScroll] = useState(0);
  const navigation = useNavigation();

  //put to Storage
  const putToStorage = async () => {
    await AsyncStorage.setItem('user', 'done');
    navigation.navigate('Tab', {screen: 'Home'});
  };
  //nextScreen
  const nextScreenHandler = () => {
    if (indexScroll + 1 === content.length) {
      return;
    }
    setIndexScroll(indexScroll + 1);
  };

  //useEffect

  useEffect(() => {
    flatListRef.current.scrollToIndex({
      index: indexScroll,
      animated: true,
    });
  }, [indexScroll]);

  return (
    <View style={{width}}>
      <FlatList
        data={content}
        horizontal
        pagingEnabled={true}
        renderItem={({item, index}) => {
          return (
            <View style={{width, height, paddingHorizontal: 15}}>
              <View style={styles.logoContainer}>
                <Logo width={50} fill={mainColors.mainColor} />
                <Image
                  source={item.image}
                  style={styles.image}
                  resizeMode={'contain'}
                />
                <Text style={styles.logoText}>{item.title}</Text>
                <Text style={styles.authText}>{item.description}</Text>
              </View>
              <Button
                title={index + 1 === content.length ? 'Начать' : 'Далее'}
                onPress={
                  index + 1 === content.length
                    ? putToStorage
                    : nextScreenHandler
                }
              />
            </View>
          );
        }}
        showsHorizontalScrollIndicator={false}
        ref={flatListRef}
        initialScrollIndex={indexScroll}
        scrollEnabled={false}
      />
    </View>
  );
};

export default WelcomeScreen;
