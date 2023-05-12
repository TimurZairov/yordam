import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import styles from './style';
import Header from '../../Components/Header';
import Input from '../../Components/Input';
import {useForm} from 'react-hook-form';
import Button from '../../Components/Button';
import {colors} from '../../theme/colors';
import ButtonOnPress from '../../Components/Button/ButtonOnPress';

const EditProfileScreen = () => {
  const router = useRoute();
  const {user} = router.params;
  //Hook form
  const {control, handleSubmit} = useForm({
    defaultValues: {
      name: user.name,
      location: user.location,
      email: user.email,
      phoneNumber: user.phoneNumber,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.imageContainer}>
        <Image source={{uri: user.image}} style={styles.image} />
        <Text style={styles.imageText}>Сменить Фото</Text>
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
      <Button handleSubmit={handleSubmit} title={'Сохранить'} />
      <ButtonOnPress title={'Отмена'} color={colors.blackColor} />
    </ScrollView>
  );
};

export default EditProfileScreen;
