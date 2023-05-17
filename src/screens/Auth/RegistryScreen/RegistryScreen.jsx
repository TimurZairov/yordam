import React, {useState} from 'react';
import {Alert, SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from './style';
import {Auth} from 'aws-amplify';
import Header from '../../../Components/Header';
import {Logo} from '../../../assets/icons';
import {colors} from '../../../theme/colors';
import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import SocialAuth from '../../../Components/SocialAuth';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

const RegistryScreen = () => {
  const [loading, setLoading] = useState(false);
  const {handleSubmit, control} = useForm({defaultValues: {}});
  const navigation = useNavigation();
  const loginHandler = () => {
    navigation.navigate('Login');
  };

  const onRegisterHandler = async data => {
    if (loading) {
      return;
    }
    setLoading(true);
    if (data.confirmPassword === data.password) {
      try {
        const res = await Auth.signUp({
          username: data.userName,
          password: data.password,
          attributes: {
            email: data.email,
            name: data.name, // optional
            // other custom attributes
          },
        });
        console.log(res);
        navigation.navigate('Confirm', {userName: data.userName});
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    } else {
      return Alert.alert('Ошибка', 'Пароли не совпадают');
    }
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
          placeholder={'Имя пользователя*'}
          control={control}
          name={'userName'}
          rules={{required: 'Введите Имя'}}
        />
        <Input
          placeholder={'Полное имя*'}
          control={control}
          name={'name'}
          rules={{required: 'Введите Ваше полное имя'}}
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
        <Button
          title={'Регистрация'}
          onPress={handleSubmit(onRegisterHandler)}
        />
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
