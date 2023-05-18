import React, {useState} from 'react';
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

const LoginScreen = () => {
  const navigation = useNavigation();
  const {handleSubmit, control} = useForm({defaultValues: {}});
  const [loading, setLoading] = useState(false);

  const registryHandler = () => {
    navigation.navigate('Registry');
  };

  const loginHandler = async data => {
    setLoading(true);
    if (loading) {
      return;
    }
    try {
      const response = await Auth.signIn(data.userName, data.password);
    } catch (e) {
      return Alert.alert('Ошибка', 'Не верный логин или пароль');
    } finally {
      setLoading(false);
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
