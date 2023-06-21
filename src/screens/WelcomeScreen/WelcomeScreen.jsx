import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from './style';
import {Logo} from '../../assets/icons';
import {colors} from '../../theme/colors';
import Button from '../../Components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState(false);

  const putToStorage = async () => {
    const res = JSON.stringify(profile);
    navigation.navigate('Tab');
    try {
      await AsyncStorage.setItem('profile', res);
    } catch (e) {
      console.log(e);
    }
  };

  const workerProfileHandler = async () => {
    await putToStorage();
  };

  const employerProfileHandler = async () => {
    setProfile(true);
    await putToStorage();
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
