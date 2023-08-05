import React, {useState} from 'react';
import {Pressable, Text} from 'react-native';
import styles from './style';

const TabButton = ({setFetchValue}) => {
  const [isActiveBtn, setIsActiveDtn] = useState('tabPost');

  const activeBtn = tab => {
    setIsActiveDtn(tab);
    setFetchValue(tab);
  };

  return (
    <>
      <Pressable
        style={[
          isActiveBtn === 'tabPost' ? styles.buttonActive : styles.button,
        ]}
        onPress={() => activeBtn('tabPost')}>
        <Text
          style={[
            isActiveBtn === 'tabPost'
              ? styles.tabScreenText
              : styles.tabScreenTextActive,
          ]}>
          Объявления
        </Text>
      </Pressable>
      <Pressable
        style={[
          isActiveBtn === 'tabSpecialist' ? styles.buttonActive : styles.button,
        ]}
        onPress={() => activeBtn('tabSpecialist')}>
        <Text
          style={[
            isActiveBtn === 'tabSpecialist'
              ? styles.tabScreenText
              : styles.tabScreenTextActive,
          ]}>
          Специалисты
        </Text>
      </Pressable>
    </>
  );
};

export default TabButton;
