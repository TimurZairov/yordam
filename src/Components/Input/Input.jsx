import React, {useState} from 'react';
import styles from './style';
import {Text, TextInput} from 'react-native';
import {colors} from '../../theme/colors';
import {Controller} from 'react-hook-form';

const Input = ({
  placeholder,
  multiline,
  name,
  control,
  rules,
  secureTextEntry,
}) => {
  const [focus, setFocus] = useState(false);
  const onFocusHandler = () => {
    setFocus(true);
  };

  const onBlurHandler = () => {
    setFocus(false);
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
              style={[focus ? styles.inputActive : styles.input]}
              placeholder={placeholder}
              placeholderTextColor={colors.lightGrayColor}
              onBlur={onBlurHandler}
              onFocus={onFocusHandler}
              multiline={multiline}
              onChangeText={onChange}
              value={value}
              secureTextEntry={secureTextEntry}
            />
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </>
        );
      }}
    />
  );
};

export default Input;
