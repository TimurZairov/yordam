import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';
import {colors} from '../../theme/colors';

interface IButton {
  title: string;
  color?: string;
}

const Button = ({title, color}: IButton) => {
  return (
    <Pressable
      style={
        !color ? styles.button : {...styles.button, backgroundColor: color}
      }>
      <Text
        style={
          !color ? styles.title : {...styles.title, color: colors.whiteColor}
        }>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
