import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './style';

const TabButton = ({title, active}) => {
  const activeBtn = e => {
    console.log(active);
  };

  return (
    <Pressable style={styles.button} onPress={activeBtn}>
      <Text
        style={[
          active === 'post' ? styles.tabScreenText : styles.tabScreenTextActive,
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default TabButton;
