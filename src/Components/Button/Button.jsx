import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';
import {colors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';

const Button = ({title, color, handleSubmit = () => {}}) => {
  const onSubmit = data => {
    console.log(data);
  };

  const navigation = useNavigation();

  return (
    <Pressable
      onPress={handleSubmit(onSubmit)}
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
