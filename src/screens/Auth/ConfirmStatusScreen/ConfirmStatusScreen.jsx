import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import styles from './style';
import {useForm} from 'react-hook-form';
import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import {colors} from '../../../theme/colors';
import {Auth} from 'aws-amplify';

const ConfirmStatusScreen = () => {
  const [loading, setLoading] = useState(false);
  const router = useRoute();
  const {userName} = router.params;
  const {handleSubmit, control} = useForm({
    defaultValues: {
      username: userName,
    },
  });

  const confirmEmailHandler = async data => {
    console.log(data);
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await Auth.confirmSignUp(data.username, data.code);
      console.log(response);
    } catch (e) {
      return Alert.alert('Упс', 'Что то пошло не так...');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.confirm}>Подтвердить почту</Text>
      <Input control={control} rules={{}} name={'username'} />
      <Input
        control={control}
        name={'code'}
        placeholder={'Пароль*'}
        rules={{required: 'Введите код высланный вам на почту'}}
      />
      <Button
        title={loading ? 'Подождите...' : 'Подтвердить'}
        onPress={handleSubmit(confirmEmailHandler)}
      />
      <Button color={colors.blackColor} title={'Выслать код на почту'} />
    </View>
  );
};

export default ConfirmStatusScreen;
