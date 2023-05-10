import React, {useState} from 'react';
import styles from './style';
import {TextInput} from 'react-native';
import {colors} from '../../theme/colors';

interface IInput {
  placeholder: string;
  multiline?: boolean;
}

const Input = ({placeholder, multiline}: IInput) => {
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
      multiline={multiline}
    />
  );
};

export default Input;
