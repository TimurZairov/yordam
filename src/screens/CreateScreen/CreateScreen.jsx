import React, {useContext} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Header from '../../Components/Header';
import styles from './style';
import {Logo} from '../../assets/icons';
import {colors} from '../../theme/colors';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import {useForm} from 'react-hook-form';
import {AppContext} from '../../context/Context';
import {useMutation} from '@apollo/client';
import {createPost} from './queries';
import {useNavigation} from '@react-navigation/native';

const CreateScreen = () => {
  const {userId} = useContext(AppContext);
  const [doCreatePost] = useMutation(createPost);
  const {coordinates, setCoordinates} = useContext(AppContext);
  const navigation = useNavigation();

  const {control, handleSubmit, reset} = useForm();

  const createPostSubmit = async data => {
    try {
      await doCreatePost({
        variables: {
          input: {
            title: data.title,
            price: data.price,
            adress: data.address,
            description: data.description,
            userID: userId,
            lat: coordinates?.latitude,
            long: coordinates?.longitude,
          },
        },
      });
      navigation.navigate('Home');
      setCoordinates(null);
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  const getLocationScreenHandler = () => {
    navigation.navigate('Location');
  };

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.logoContainer}>
        <Logo width={65} height={65} fill={colors.blackColor} />
        <Text style={styles.logoText}>Yordam</Text>
      </View>
      <Text style={styles.createTitle}>Что нужно сделать?</Text>
      <Input
        placeholder={'Напишите коротко, тему работ*'}
        name={'title'}
        control={control}
        rules={{required: 'Напишите что нужно сделать?*'}}
      />
      <Input
        placeholder={'Укажите цену*'}
        name={'price'}
        control={control}
        rules={{required: 'Укажите цену*'}}
      />
      <Input
        placeholder={'Укажите город и улицу и дом*'}
        name={'address'}
        control={control}
        rules={{required: 'Укажите адрес где нужно выполнить работу*'}}
      />
      <Input
        placeholder={
          'Опишите подробнее что нужно сделать, в каой срок и ваши ожидния*'
        }
        multiline
        control={control}
        name={'description'}
        rules={{required: 'Подробнее опишите что нужно сделать*'}}
      />
      <Button
        title={'Место на карте'}
        color={colors.blackColor}
        onPress={getLocationScreenHandler}
      />
      <Button title={'Создать'} onPress={handleSubmit(createPostSubmit)} />
    </ScrollView>
  );
};

export default CreateScreen;
