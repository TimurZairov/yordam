import React, {useState} from 'react';
import styles from './style';
import {Text, View} from 'react-native';
import Input from '../../../Components/Input';
import {useForm} from 'react-hook-form';
import Button from '../../../Components/Button';
import {Auth} from 'aws-amplify';
import {useNavigation} from '@react-navigation/native';

const ResetPasswordScreen = () => {
  const {handleSubmit, control} = useForm();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const resetPasswordHandler = async data => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await Auth.forgotPassword(data.email);
      navigation.navigate('Forgot');
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const goBackHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.reset}>Восстановить пароль</Text>
      <Input
        control={control}
        placeholder={'Email'}
        name={'email'}
        rules={{required: 'Введите email'}}
      />
      <Button
        onPress={handleSubmit(resetPasswordHandler)}
        title={'Восстановить'}
      />
      <Text style={[styles.reset, styles.auth]} onPress={goBackHandler}>
        Авторизоваться
      </Text>
    </View>
  );
};

export default ResetPasswordScreen;
