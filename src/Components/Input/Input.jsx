import React, {useState} from 'react';
import styles from './style';
import {Text, TextInput} from 'react-native';
import {colors} from '../../theme/colors';
import {Controller} from 'react-hook-form';

const Input = ({placeholder, multiline, name, control, rules}) => {
  const [colorBg, setColorBg] = useState(colors.blackColor);

  const onFocus = () => {
    setColorBg(colors.purpleColor);
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({field: {onBlur, onChange, value}, fieldState: {error}}) => {
        return (
          <>
            <TextInput
              style={{...styles.input, shadowColor: colorBg}}
              placeholder={placeholder}
              placeholderTextColor={colors.lightGrayColor}
              onFocus={onFocus}
              onBlur={onBlur}
              multiline={multiline}
              onChangeText={onChange}
              value={value}
            />
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </>
        );
      }}
    />
  );
};

export default Input;
