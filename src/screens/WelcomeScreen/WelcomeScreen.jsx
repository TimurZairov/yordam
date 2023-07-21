import React, {useContext, useState} from 'react';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import styles from './style';
import {Logo} from '../../assets/icons';
import {colors} from '../../theme/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useMutation} from '@apollo/client';
import {updateUser} from './queries';
import {AppContext} from '../../context/Context';
import useGetUser from '../../utils/custom/useGetUser/useGetUser';

import imageWelcomeOne from '../../assets/images/MainImageOne.png';
import imageWelcomeTwo from '../../assets/images/MainImageTwo.png';

const content = [
  {
    image: imageWelcomeOne,
    title: 'Услуги для вас',
    description:
      'Усли у вас есть работа котрую необходимо выполнить за определенную\n' +
      '          сумму, разместите свое работу и пользователи котрым нужен заработок\n' +
      '          будут готовы его выполнить, или же сразу найдите исполнителья из\n' +
      '          списка.',
  },
  {
    image: imageWelcomeTwo,
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

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState(false);
  const [onGetProfile] = useMutation(updateUser);
  const {userId} = useContext(AppContext);

  const [data, loading, error] = useGetUser();
  const user = data;

  //put to Storage
  const putToStorage = async (id, version) => {
    const userProfileRole = JSON.stringify(profile);
    try {
      await AsyncStorage.setItem('profile', userProfileRole);
      await onGetProfile({
        variables: {input: {id, employer: userProfileRole, _version: version}},
      });
      navigation.navigate('Tab', {screen: 'Home'});
    } catch (e) {
      console.log(e);
    }
  };
  //worker
  const workerProfileHandler = async () => {
    setProfile(false);
    putToStorage(userId);
  };
  //employer
  const employerProfileHandler = async () => {
    setProfile(true);
    putToStorage();
  };

  return (
    <SafeAreaView style={styles.saveContainer}>
      <FlatList
        data={content}
        ListHeaderComponent={
          <View style={styles.logoContainer}>
            <Logo width={65} fill={colors.blackColor} />
            <Text style={styles.logoText}>Yordam</Text>
          </View>
        }
        renderItem={({item}) => {
          return (
            <View style={{width: 300, height: 300}}>
              <Image
                source={{
                  uri: String(item.image),
                }}
                style={{width: 200, height: 200}}
                resizeMode={'cover'}
              />
              <Text>{item.title}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default WelcomeScreen;

// <ScrollView
//     style={styles.container}
//     contentContainerStyle={{
//       justifyContent: 'center',
//       paddingHorizontal: 15,
//     }}>
//   <View style={styles.logoContainer}>
//     <Logo width={65} fill={colors.blackColor} />
//     <Text style={styles.logoText}>Yordam</Text>
//     <Image
//         source={require('../../assets/images/MainImageOne.png')}
//         style={styles.image}
//         resizeMode={'contain'}
//     />
//   </View>
//
//   <Text style={styles.authText}>Услуги для вас</Text>
//   <Text style={styles.forgotPassword}>
//     Усли у вас есть работа котрую необходимо выполнить за определенную
//     сумму, разместите свое работу и пользователи котрым нужен заработок
//     будут готовы его выполнить, или же сразу найдите исполнителья из
//     списка.
//   </Text>
//   {/*<Button title={'Я ищу подработку'} onPress={workerProfileHandler} />*/}
//   {/*<Button*/}
//   {/*  title={'Мне нужен помощник'}*/}
//   {/*  onPress={employerProfileHandler}*/}
//   {/*  color={colors.blackColor}*/}
//   {/*/>*/}
//   <Button title={'Далее'} />
// </ScrollView>
