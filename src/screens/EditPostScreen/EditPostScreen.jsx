import React, {useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Header from '../../Components/Header';
import styles from './style';
import {Logo} from '../../assets/icons';
import {colors} from '../../theme/colors';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import {useForm} from 'react-hook-form';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useQuery} from '@apollo/client';
import {getPost} from './queries';

const EditPostScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {id} = route.params;

  const {control, handleSubmit, reset, setValue} = useForm();

  //GetPost
  const {data, loading, error} = useQuery(getPost, {variables: {id}});
  const post = data?.getPost;

  const createPostSubmit = async data => {};

  const getLocationScreenHandler = () => {
    navigation.navigate('Location');
  };

  //Edit Post

  useEffect(() => {
    setValue('title', post.title);
    setValue('price', post.price);
    setValue('description', post.description);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.logoContainer}>
        <Logo width={65} height={65} fill={colors.blackColor} />
        <Text style={styles.logoText}>Yordam</Text>
      </View>
      <Text style={styles.createTitle}>Редактировать пост</Text>
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
        placeholder={
          'Опишите подробнее что нужно сделать, в каой срок и ваши ожидния*'
        }
        multiline
        control={control}
        name={'description'}
        rules={{required: 'Подробнее опишите что нужно сделать*'}}
      />
      <Button title={'Сохранить'} onPress={handleSubmit(createPostSubmit)} />
    </ScrollView>
  );
};

export default EditPostScreen;
