import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './style';

interface ITabScreen {
  title: string;
  active?: boolean;
}

const TabButton = ({title, active}: ITabScreen) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button}>
        <Text
          style={[active ? styles.tabScreenText : styles.tabScreenTextActive]}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

export default TabButton;
