import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';

interface IButton {
  title: string;
}

const Button = ({title}: IButton) => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default Button;
