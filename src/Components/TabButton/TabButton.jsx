import React, {useState} from 'react';
import {Pressable, Text} from 'react-native';
import styles from './style';

const TabButton = ({title}) => {
  const [isActive, setIsActive] = useState('tabPost');

  const activeBtn = tab => {
    setIsActive(tab);
  };

  return (
    <>
      <Pressable style={styles.button} onPress={() => activeBtn('tabPost')}>
        <Text
          style={[
            isActive === 'tabPost'
              ? styles.tabScreenText
              : styles.tabScreenTextActive,
          ]}>
          {title}
        </Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => activeBtn('tabSpecialist')}>
        <Text
          style={[
            isActive === 'tabSpecialist'
              ? styles.tabScreenText
              : styles.tabScreenTextActive,
          ]}>
          {title}
        </Text>
      </Pressable>
    </>
  );
};

export default TabButton;
