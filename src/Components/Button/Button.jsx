import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {colors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';

const Button = ({title, color, onPress = () => {}}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={
        !color ? styles.button : {...styles.button, backgroundColor: color}
      }>
      <Text
        style={
          !color ? styles.title : {...styles.title, color: colors.whiteColor}
        }>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
