import React, {useState} from 'react';

import {Text, View} from 'react-native';
import styles from './style';
import Input from '../../../Components/Input';
import {useForm} from 'react-hook-form';
import Button from '../../../Components/Button';
import {Auth} from 'aws-amplify';
import {useNavigation} from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const {handleSubmit, control} = useForm({defaultValues: {}});
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const forgotPassHandler = async data => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await Auth.forgotPasswordSubmit(data.email, data.code, data.password);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const loginScreenHandler = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Восстановление пароля</Text>
      <Input
        control={control}
        name={'email'}
        rules={{}}
        placeholder={'Веедите почту*'}
      />
      <Input
        control={control}
        name={'code'}
        rules={{}}
        placeholder={'Код подтверждения*'}
      />
      <Input
        control={control}
        name={'password'}
        rules={{}}
        placeholder={'Новый пароль*'}
        secureTextEntry
      />
      <Button
        title={loading ? 'Загрузка...' : 'Сохранить'}
        onPress={handleSubmit(forgotPassHandler)}
      />
      <Text
        style={[styles.loginScreen, styles.loginScreen]}
        onPress={loginScreenHandler}>
        Авторизрваться
      </Text>
    </View>
  );
};

export default ForgotPasswordScreen;
