import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './style';

interface ITabScreen {
  title: string;
  active?: boolean;
}

const TabButton = ({title, active}: ITabScreen) => {
  return (
    <Pressable style={styles.button}>
      <Text
        style={[active ? styles.tabScreenText : styles.tabScreenTextActive]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default TabButton;
