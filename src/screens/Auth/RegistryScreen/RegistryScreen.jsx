import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from './style';
import Header from '../../../Components/Header';
import {Logo} from '../../../assets/icons';
import {colors} from '../../../theme/colors';
import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import SocialAuth from '../../../Components/SocialAuth';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

const RegistryScreen = () => {
  const {handleSubmit, control} = useForm({defaultValues: {}});
  const navigation = useNavigation();
  const loginHandler = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.saveContainer}>
      <View style={styles.headerContainer}>
        <Header registry />
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.logoContainer}>
          <Logo width={65} fill={colors.blackColor} />
          <Text style={styles.logoText}>Yordam</Text>
        </View>
        <Text style={styles.authText}>Регистрация</Text>
        <Input
          placeholder={'Имя*'}
          control={control}
          name={'userName'}
          rules={{required: 'Введите Имя'}}
        />
        <Input
          placeholder={'Email*'}
          control={control}
          name={'email'}
          rules={{required: 'Введите Email'}}
        />
        <Input
          placeholder={'Пароль*'}
          control={control}
          name={'password'}
          rules={{required: 'Введите Пароль'}}
        />
        <Input
          placeholder={'Подтвердить пароль*'}
          control={control}
          name={'confirmPassword'}
          rules={{required: 'Подтвердите Пароль'}}
        />
        <Button title={'Войти'} handleSubmit={handleSubmit} />
        <Text style={[styles.forgotPassword, {textAlign: 'center'}]}>Или</Text>
        <View style={styles.socialIcons}>
          <SocialAuth />
        </View>
        <Text onPress={loginHandler} style={[styles.registry, styles.login]}>
          У вас есть аккаунт?{' '}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistryScreen;
