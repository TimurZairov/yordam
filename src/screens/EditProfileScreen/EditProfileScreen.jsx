import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator, Image, ScrollView, Text, View} from 'react-native';
import {getUser, updateUser} from './queries';
import {AppContext} from '../../context/Context';
import {useMutation, useQuery} from '@apollo/client';
import {Storage} from 'aws-amplify';

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
import {useNavigation} from '@react-navigation/native';

const jobCategory = ['Все', 'Ремонт', 'Уборка', 'Водитель', 'Няня'];

const EditProfileScreen = () => {
  const [changeAvatar, setChangeAvatar] = useState(null);
  const [image, setImage] = useState('');
  const [jobItems, setJobItems] = useState([]);

  const navigation = useNavigation();
  const {userId} = useContext(AppContext);

  //GET USER
  const {data, loading, error} = useQuery(getUser, {
    variables: {
      id: userId,
    },
  });

  const {control, handleSubmit, setValue} = useForm();

  //USER
  const user = data?.getUser;

  //UpdateUser mutation
  const [
    doUpdateUser,
    {loading: updateLoading, error: updateError}, // change name if exist
  ] = useMutation(updateUser);

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

  //update function
  const submitUpdateUserHandler = async formUpdate => {
    //upload image profile and get the key
    let image;
    if (changeAvatar) {
      image = await uploadImageHandler(changeAvatar.uri);
    }
    try {
      await doUpdateUser({
        variables: {
          input: {
            id: userId,
            ...formUpdate,
            _version: user?._version,
            image,
            userJob: jobItems,
          },
        },
      });
      navigation.goBack();
    } catch (e) {
      console.log(e);
    }
  };
  //Upload Image Profile
  const uploadImageHandler = async uri => {
    try {
      //blob
      const res = await fetch(uri);
      const blob = await res.blob();
      const splitBlob = blob._data?.type.split('/');
      const extension = splitBlob[splitBlob.length - 1];
      const imageKey = await Storage.put(`${userId}-image.${extension}`, blob);
      return imageKey.key;
    } catch (e) {
      console.log(e);
    }
  };

  //remove from jobCategory
  // const removeJobCategoryHandler = job => {
  //   const filtered = user?.userJob.filter(item => item !== job);
  //   setCategory(filtered);
  // };

  //add to jobCategory
  const addJobCategoryHandler = item => {
    const isGot = jobItems?.includes(item);
    if (!isGot) {
      setJobItems([item, ...jobItems]);
    }
    console.log(jobItems);
  };

  //react hook form setValue
  useEffect(() => {
    if (user) {
      setValue('name', user.name);
      setValue('email', user.email);
      setValue('location', user.location);
      setValue('phoneNumber', user.phoneNumber);
      const getImageHandler = async () => {
        try {
          const res = await Storage.get(user.image);
          setImage(res);
        } catch (e) {
          console.log(e);
        }
      };
      getImageHandler();
    }
  }, [user, setValue]);

  useEffect(() => {
    if (user) {
      setJobItems([...user?.userJob]);
    }
  }, [user]);

  if (loading) {
    return <ActivityIndicator color={colors.purpleColor} />;
  }

  if (error || updateError) {
    return <ErrorScreen error={updateError.message} />;
  }

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.imageContainer}>
        {user.image ? (
          <Image
            source={{uri: changeAvatar?.uri || image}}
            style={styles.image}
          />
        ) : (
          <DefaultAvatar width={85} fill={colors.grayColor} />
        )}
        <Text style={styles.imageText} onPress={imageHandler}>
          Сменить Фото
        </Text>
      </View>
      <View>
        {user.employer ? (
          <View>
            <Text style={styles.label}>Что вы умеет делать?</Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              {user?.userJob &&
                jobCategory.map((item, index) => {
                  return (
                    <View
                      key={item.toString()}
                      style={
                        jobItems?.includes(item)
                          ? styles.active
                          : styles.jobCategory
                      }>
                      <Text
                        style={[
                          jobItems?.includes(item)
                            ? styles.activeText
                            : styles.text,
                        ]}
                        onPress={() => addJobCategoryHandler(item)}
                        onLongPress={() => {}}>
                        {item}
                      </Text>
                    </View>
                  );
                })}
            </View>
          </View>
        ) : null}
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
