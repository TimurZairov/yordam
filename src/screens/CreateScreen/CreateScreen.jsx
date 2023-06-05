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

const CreateScreen = () => {
  const {userId, user} = useContext(AppContext);
  const [doCreatePost] = useMutation(createPost);

  const {control, handleSubmit} = useForm();

  const createPostSubmit = async data => {
    console.log(data);
    try {
      const response = await doCreatePost({
        variables: {
          input: {
            title: data.title,
            price: data.price,
            adress: data.adress,
            description: data.description,
            userID: userId,
            lat: '39.672616',
            long: '66.853766',
            User: {
              id: userId,
              email: user.email,
              location: '',
              image: '',
              phoneNumber: '',
              employer: false,
              about: '',
            },
            Comment: [],
          },
        },
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
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
      <Button title={'Создать'} onPress={handleSubmit(createPostSubmit)} />
    </ScrollView>
  );
};

export default CreateScreen;
