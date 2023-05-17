import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from './style';
import Header from '../../../Components/Header';
import {Logo} from '../../../assets/icons';
import {colors} from '../../../theme/colors';
import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import SocialAuth from '../../../Components/SocialAuth';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const LoginScreen = () => {
  const navigation = useNavigation();
  const {handleSubmit, control} = useForm({defaultValues: {}});

  const registryHandler = () => {
    navigation.navigate('Registry');
  };

  return (
    <SafeAreaView style={styles.saveContainer}>
      <View style={styles.headerContainer}>
        <Header />
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo width={65} fill={colors.blackColor} />
          <Text style={styles.logoText}>Yordam</Text>
        </View>
        <Text style={styles.authText}>Авторизоваться</Text>
        <Input
          control={control}
          placeholder={'Имя пользователя*'}
          name={'userName'}
          rules={{required: 'Введите пароль'}}
        />
        <Input
          control={control}
          placeholder={'Пароль*'}
          name={'password'}
          rules={{
            required: 'Введите пароль',
          }}
        />
        <Text style={styles.forgotPassword}>Забыли пароль?</Text>
        <Button handleSubmit={handleSubmit} title={'Войти'} />
        <Text style={[styles.forgotPassword, {textAlign: 'center'}]}>Или</Text>
        <View style={styles.socialIcons}>
          <SocialAuth />
        </View>
        <Text onPress={registryHandler} style={styles.registry}>
          Регистрация
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
