import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from './style';
import Header from '../../../Components/Header';
import {Logo} from '../../../assets/icons';
import {colors} from '../../../theme/colors';
import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import SocialAuth from '../../../Components/SocialAuth';

const RegistryScreen = () => {
  return (
    <SafeAreaView style={styles.saveContainer}>
      <View style={styles.headerContainer}>
        <Header registry />
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.logoContainer}>
          <Logo width={65} fill={colors.blackColor} />
          <Text style={styles.logoText}>Yordam</Text>
        </View>
        <Text style={styles.authText}>Регистрация</Text>
        <Input placeholder={'Email*'} />
        <Input placeholder={'Фамилия и Имя*'} />
        <Input placeholder={'Пароль*'} />
        <Input placeholder={'Подтвердить пароль*'} />
        <Button title={'Войти'} />
        <Text style={[styles.forgotPassword, {textAlign: 'center'}]}>Или</Text>
        <View style={styles.socialIcons}>
          <SocialAuth />
        </View>
        <Text style={[styles.registry, styles.login]}>
          У вас есть аккаунт?{' '}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistryScreen;
