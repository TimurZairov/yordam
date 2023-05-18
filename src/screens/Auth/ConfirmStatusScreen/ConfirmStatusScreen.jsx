import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './style';
import {useForm} from 'react-hook-form';
import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import {colors} from '../../../theme/colors';
import {Auth} from 'aws-amplify';

const ConfirmStatusScreen = () => {
  const [loadingConfirm, setLoadingConfirm] = useState(false);
  const [loadingCode, setLoadingCode] = useState(false);
  const navigation = useNavigation();
  const router = useRoute();
  const {username} = router.params;
  console.log(username);
  const {handleSubmit, control} = useForm({
    defaultValues: {
      username: username,
    },
  });

  const confirmEmailHandler = async data => {
    if (loadingConfirm) {
      return;
    }
    setLoadingConfirm(true);
    try {
      const res = await Auth.confirmSignUp(data.username, data.code);
      if (res === 'SUCCESS') {
        navigation.navigate('Login');
      } else {
        return Alert.alert('Ошибка', 'Попорбуйте позже');
      }
    } catch (e) {
      return Alert.alert('Упс', 'Что то пошло не так...');
    } finally {
      setLoadingConfirm(false);
    }
  };

  const resendConfirmPassHandler = async data => {
    if (loadingCode) {
      return;
    }
    setLoadingCode(true);
    try {
      await Auth.resendSignUp(data.username);
      return Alert.alert(
        'Код выслан',
        'Код был выслан на указанную при регистрации почту',
      );
    } catch (e) {
      return Alert.alert('Ошибка', 'Попорбуйте позже');
    } finally {
      setLoadingCode(false);
    }
  };

  const loginScreenNavigationHandler = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.confirm}>Подтвердить почту</Text>
      <Input
        control={control}
        rules={{}}
        name={'username'}
        placeholder={'Введите почту'}
      />
      <Input
        control={control}
        name={'code'}
        placeholder={'Пароль*'}
        rules={{required: 'Введите код высланный вам на почту'}}
      />
      <Button
        title={loadingConfirm ? 'Подождите...' : 'Подтвердить'}
        onPress={handleSubmit(confirmEmailHandler)}
      />
      <Button
        color={colors.blackColor}
        title={loadingCode ? 'Подождите...' : 'Выслать код на почту'}
        onPress={handleSubmit(resendConfirmPassHandler)}
      />
      <Text
        style={styles.auth}
        onPress={loginScreenNavigationHandler}
        hotSlop={5}>
        Авторизация
      </Text>
    </View>
  );
};

export default ConfirmStatusScreen;
