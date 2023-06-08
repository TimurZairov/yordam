import React, {useEffect} from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import Header from '../../Components/Header';
import styles from './style';
import {Logo} from '../../assets/icons';
import {colors} from '../../theme/colors';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import {useForm} from 'react-hook-form';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useMutation, useQuery} from '@apollo/client';
import {getPost, updatePost} from './queries';
import ErrorScreen from '../ErrorScreen';

const EditPostScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {id} = route.params;

  //GetPost
  const {data, loading, error} = useQuery(getPost, {variables: {id}});
  const post = data?.getPost;

  //react-hook-form
  const {control, handleSubmit, setValue} = useForm();

  useEffect(() => {
    setValue('title', post?.title);
    setValue('price', post?.price);
    setValue('description', post?.description);
  }, [post, setValue]);

  //Edit Post
  const [
    doUpdatePost,
    {data: dataPost, loading: loadingPost, error: errorPost},
  ] = useMutation(updatePost);

  //function updatePost

  const updatePostSubmit = async updatedPost => {
    console.log(updatedPost);
    try {
      await doUpdatePost({
        variables: {
          input: {
            id: post.id,
            ...updatedPost,
            _version: post?._version,
          },
        },
      });
      navigation.popToTop();
      navigation.navigate('HomeScreen');
    } catch (e) {
      console.log(e);
    }
  };
  ////

  if (loading || loadingPost) {
    return <ActivityIndicator color={colors.purpleColor} />;
  }
  if (error || errorPost) {
    return <ErrorScreen error={error.message} />;
  }

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
      <Button title={'Сохранить'} onPress={handleSubmit(updatePostSubmit)} />
    </ScrollView>
  );
};

export default EditPostScreen;
