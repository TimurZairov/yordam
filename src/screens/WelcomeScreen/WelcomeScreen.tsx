import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from './style';
import {Logo} from '../../assets/icons';
import {colors} from '../../theme/colors';
import Button from '../../Components/Button';

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.saveContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo width={65} fill={colors.blackColor} />
          <Text style={styles.logoText}>Yordam</Text>
        </View>
        <Text style={styles.authText}>Добро пожаловать</Text>
        <Text style={styles.forgotPassword}>
          Выберите себе профиль, Вам нужна подработка или вам нужен помощник что
          бы выполнить работу?
        </Text>
        <Button title={'Я ищу подработку'} />
        <Button title={'Мне нужен помощник'} color={colors.blackColor} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
