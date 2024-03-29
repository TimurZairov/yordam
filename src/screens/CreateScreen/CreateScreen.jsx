import React, {useContext, useState} from 'react';
import {ActivityIndicator, ScrollView, Text} from 'react-native';
import Header from '../../Components/Header';
import styles from './style';
import {mainColors} from '../../theme/colors';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import {useForm} from 'react-hook-form';
import {AppContext} from '../../context/Context';
import {useMutation} from '@apollo/client';
import {createPost} from './queries';
import {useNavigation} from '@react-navigation/native';
import TabFilter from '../../Components/TabFilter';

const filterButtonArray = ['Ремонт', 'Уборка', 'Водитель', 'Няня'];

const CreateScreen = () => {
  const [category, setCategory] = useState('Ремонт');
  const {userId} = useContext(AppContext);
  const [doCreatePost] = useMutation(createPost);
  const {coordinates, setCoordinates} = useContext(AppContext);
  const navigation = useNavigation();
  const {control, handleSubmit, reset} = useForm();
  const [loading, setLoading] = useState(false);

  const createPostSubmit = async data => {
    try {
      setLoading(true);
      await doCreatePost({
        variables: {
          input: {
            type: 'POST',
            title: data.title,
            price: data.price,
            adress: data.address,
            description: data.description,
            userID: userId,
            lat: coordinates?.latitude,
            long: coordinates?.longitude,
            category: category,
          },
        },
      });
      navigation.navigate('Home');
      setCoordinates(null);
      reset();
    } catch (e) {
      console.log(e);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <ActivityIndicator color={mainColors.mainColor} />;
  }

  const getLocationScreenHandler = () => {
    navigation.navigate('Location');
  };
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Text style={styles.createTitle}>Что нужно сделать?</Text>
      <TabFilter
        setCategory={setCategory}
        filterButtonArray={filterButtonArray}
      />
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
        color={mainColors.blueColor}
        onPress={getLocationScreenHandler}
      />
      <Button
        title={loading ? 'Подождите' : 'Создать'}
        onPress={handleSubmit(createPostSubmit)}
      />
    </ScrollView>
  );
};

export default CreateScreen;
