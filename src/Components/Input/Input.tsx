import React, {useState} from 'react';
import styles from './style';
import {TextInput} from 'react-native';
import {colors} from '../../theme/colors';

interface IInput {
  placeholder: string;
}

const Input = ({placeholder}: IInput) => {
  const [colorBg, setColorBg] = useState(colors.blackColor);

  const onFocus = () => {
    setColorBg(colors.purpleColor);
  };

  const onBlur = () => {
    setColorBg(colors.blackColor);
  };

  return (
    <TextInput
      style={{...styles.input, shadowColor: colorBg}}
      placeholder={placeholder}
      placeholderTextColor={colors.lightGrayColor}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default Input;
