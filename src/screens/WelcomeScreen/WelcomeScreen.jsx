import React, {useContext, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from './style';
import {Logo} from '../../assets/icons';
import {colors} from '../../theme/colors';
import Button from '../../Components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useMutation} from '@apollo/client';
import {updateUser} from './queries';
import {AppContext} from '../../context/Context';
import useGetUser from '../../utils/custom/useGetUser/useGetUser';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState(false);
  const [onGetProfile] = useMutation(updateUser);
  const {userId} = useContext(AppContext);

  const [data, loading, error] = useGetUser();
  const user = data;

  //put to Storage
  const putToStorage = async (id, version) => {
    console.log(profile);
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
      <ScrollView style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo width={65} fill={colors.blackColor} />
          <Text style={styles.logoText}>Yordam</Text>
        </View>
        <Text style={styles.authText}>Добро пожаловать</Text>
        <Text style={styles.forgotPassword}>
          Выберите себе профиль, Вам нужна подработка или вам нужен помощник что
          бы выполнить работу?
        </Text>
        <Button title={'Я ищу подработку'} onPress={workerProfileHandler} />
        <Button
          title={'Мне нужен помощник'}
          onPress={employerProfileHandler}
          color={colors.blackColor}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
