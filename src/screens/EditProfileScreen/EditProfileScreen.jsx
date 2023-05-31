import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator, Image, ScrollView, Text, View} from 'react-native';
import {getUser, updateUser} from './queries';
import {AppContext} from '../../context/Context';
import {useMutation, useQuery} from '@apollo/client';

import styles from './style';
import Header from '../../Components/Header';
import Input from '../../Components/Input';
import {useForm} from 'react-hook-form';
import Button from '../../Components/Button';
import {colors} from '../../theme/colors';
import ButtonOnPress from '../../Components/Button/ButtonOnPress';
import {launchImageLibrary} from 'react-native-image-picker';
import {DefaultAvatar} from '../../assets/icons';
import ErrorScreen from '../ErrorScreen';

const EditProfileScreen = () => {
  const {userId} = useContext(AppContext);
  const {data, loading, error} = useQuery(getUser, {
    variables: {
      id: userId,
    },
  });

  const user = data.getUser;

  const [
    doUpdateUser,
    {data: updateData, loading: updateLoading, error: updateError},
  ] = useMutation(updateUser);

  const [changeAvatar, setChangeAvatar] = useState(null);
  // //Hook form
  const {control, handleSubmit, setValue} = useForm();

  //ImagePicker
  const imageHandler = async () => {
    try {
      const result = await launchImageLibrary(
        {mediaType: 'photo'},
        ({didCancel, errorCode, errorMessage, assets}) => {
          if (!didCancel && !errorCode && assets && assets.length) {
            setChangeAvatar(assets[0]);
          }
        },
      );
    } catch (e) {
      console.warn(e);
    }
  };

  const submitUpdateUserHandler = async formUpdate => {
    console.log(formUpdate);
    try {
      await doUpdateUser({
        variables: {
          input: {id: userId, ...formUpdate, _version: user._version},
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  if (loading) {
    return <ActivityIndicator color={colors.purpleColor} />;
  }

  if (error || updateError) {
    return <ErrorScreen error={updateError.message} />;
  }

  useEffect(() => {
    setValue('name', user.name);
    setValue('email', user.email);
    setValue('location', user.location);
    setValue('phoneNumber', user.phoneNumber);
  }, [user, setValue]);

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.imageContainer}>
        {user.image.length !== 0 ? (
          <Image
            source={{uri: changeAvatar?.uri || user.image}}
            style={styles.image}
          />
        ) : (
          <DefaultAvatar width={85} fill={colors.grayColor} />
        )}
        <Text style={styles.imageText} onPress={imageHandler}>
          Сменить Фото
        </Text>
      </View>
      <Text style={styles.label}> Ваше имя</Text>
      <Input
        control={control}
        name={'name'}
        rules={{required: 'Поле имя не должно быть пустым'}}
      />
      <Text style={styles.label}>Ваш адрес</Text>
      <Input control={control} name={'location'} />
      <Text style={styles.label}>Ваша почта</Text>
      <Input
        control={control}
        name={'email'}
        rules={{required: 'Поле email не должно быть пустым'}}
      />
      <Text style={styles.label}>Номер телефона</Text>
      <Input control={control} name={'phoneNumber'} />
      <Button
        onPress={handleSubmit(submitUpdateUserHandler)}
        title={updateLoading ? 'Сохряняем...' : 'Сохранить'}
      />
      <ButtonOnPress title={'Отмена'} color={colors.blackColor} />
    </ScrollView>
  );
};

export default EditProfileScreen;
