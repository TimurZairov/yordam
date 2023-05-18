import React, {useContext, useState} from 'react';
import {Alert, SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from './style';
import Header from '../../../Components/Header';
import {Logo} from '../../../assets/icons';
import {colors} from '../../../theme/colors';
import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import SocialAuth from '../../../Components/SocialAuth';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';
import {AppContext} from '../../../context/Context';

const LoginScreen = () => {
  const navigation = useNavigation();
  const {handleSubmit, control, reset} = useForm();
  const [loading, setLoading] = useState(false);
  const {setUser} = useContext(AppContext);

  const registryHandler = () => {
    navigation.navigate('Registry');
  };

  const loginHandler = async data => {
    setLoading(true);
    if (loading) {
      return;
    }
    try {
      const user = await Auth.signIn(data.email, data.password);
      setUser(user);
      navigation.navigate('Profile');
    } catch (e) {
      console.log(e);
      return Alert.alert('Ошибка', 'Не верный логин или пароль');
    } finally {
      setLoading(false);
      reset();
    }
  };

  const forgotPassScreenHandler = () => {
    navigation.navigate('Reset');
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
          placeholder={'Email*'}
          name={'email'}
          rules={{required: 'Введите Email'}}
        />
        <Input
          control={control}
          placeholder={'Пароль*'}
          name={'password'}
          rules={{
            required: 'Введите пароль',
          }}
          secureTextEntry
        />
        <Text onPress={forgotPassScreenHandler} style={styles.forgotPassword}>
          Забыли пароль?
        </Text>
        <Button
          onPress={handleSubmit(loginHandler)}
          title={loading ? 'Подождите...' : 'Войти'}
        />
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
