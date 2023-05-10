import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Header from '../../Components/Header';
import styles from './style';
import {Logo} from '../../assets/icons';
import {colors} from '../../theme/colors';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

const CreateScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.logoContainer}>
        <Logo width={65} height={65} fill={colors.blackColor} />
        <Text style={styles.logoText}>Yordam</Text>
      </View>
      <Text style={styles.createTitle}>Что нужно сделать?</Text>
      <Input placeholder={'Напишите коротко, тему работ*'} />
      <Input placeholder={'Укажите цену*'} />
      <Input placeholder={'Укажите город и улицу и дом*'} />
      <Input
        placeholder={
          'Опишите подробнее что нужно сделать, в каой срок и ваши ожидния*'
        }
        multiline
      />
      <Button title={'Создать'} />
    </ScrollView>
  );
};

export default CreateScreen;
