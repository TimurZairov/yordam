import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from './style';
import Header from '../../../Components/Header';
import {Logo} from '../../../assets/icons';
import {colors} from '../../../theme/colors';
import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import SocialAuth from '../../../Components/SocialAuth';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.saveContainer}>
      <View style={styles.headerContainer}>
        <Header login />
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo width={65} fill={colors.blackColor} />
          <Text style={styles.logoText}>Yordam</Text>
        </View>
        <Text style={styles.authText}>Авторизоваться</Text>
        <Input placeholder={'Email*'} />
        <Input placeholder={'Пароль*'} />
        <Text style={styles.forgotPassword}>Забыли пароль?</Text>
        <Button title={'Войти'} />
        <Text style={[styles.forgotPassword, {textAlign: 'center'}]}>Или</Text>
        <View style={styles.socialIcons}>
          <SocialAuth />
        </View>
        <Text style={styles.registry}>Регистрация</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
