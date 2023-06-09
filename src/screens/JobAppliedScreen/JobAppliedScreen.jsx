import React from 'react';
import {Keyboard, Pressable, Text, TextInput, View} from 'react-native';
import styles from './style';
import Header from '../../Components/Header';

const JobAppliedScreen = () => {
  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <Header />
      <View style={styles.inputContainer}>
        <TextInput multiline={true} style={styles.input} />
        <Text style={styles.submit}>Оправить</Text>
      </View>
    </Pressable>
  );
};

export default JobAppliedScreen;
