import React, {useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import styles from './style';
import Header from '../../Components/Header';
import Input from '../../Components/Input';
import {useForm} from 'react-hook-form';
import Button from '../../Components/Button';
import {colors} from '../../theme/colors';
import ButtonOnPress from '../../Components/Button/ButtonOnPress';
import {launchImageLibrary} from 'react-native-image-picker';
import {DefaultAvatar} from '../../assets/icons';

const EditProfileScreen = () => {
  const [changeAvatar, setChangeAvatar] = useState(null);
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
      <Button handleSubmit={handleSubmit} title={'Сохранить'} />
      <ButtonOnPress title={'Отмена'} color={colors.blackColor} />
    </ScrollView>
  );
};

export default EditProfileScreen;
