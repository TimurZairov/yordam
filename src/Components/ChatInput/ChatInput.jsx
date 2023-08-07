import React from 'react';
import {View, TextInput, Pressable} from 'react-native';
import {SendIcon} from '../../assets/icons/index';
import {mainColors} from '../../theme/colors';
import styles from './style';

const ChatInput = ({comment, setComment, onPress}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        multiline={true}
        style={styles.input}
        value={comment}
        onChangeText={setComment}
      />
      <Pressable style={styles.submit} onPress={onPress}>
        <SendIcon fill={mainColors.mainColor} width={30} />
      </Pressable>
    </View>
  );
};

export default ChatInput;
