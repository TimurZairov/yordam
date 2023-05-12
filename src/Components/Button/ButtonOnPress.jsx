import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';
import {colors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';

const ButtonOnPress = ({title, color}) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.goBack();
  };

  return (
    <Pressable
      onPress={onPress}
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

export default ButtonOnPress;
