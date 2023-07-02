import React, {useRef, useState} from 'react';
import {Pressable, Text} from 'react-native';
import styles from './style';

const TabButton = ({title, active}) => {
  const [posts, setPost] = useState(true);
  const [workers, setWorkers] = useState(false);
  const refBtn = useRef();

  const activeBtn = () => {
    console.log(refBtn.current._internalFiberInstanceHandleDEV.title);
  };

  return (
    <Pressable style={styles.button} onPress={activeBtn}>
      <Text
        style={[active ? styles.tabScreenText : styles.tabScreenTextActive]}
        ref={refBtn}>
        {title}
      </Text>
    </Pressable>
  );
};

export default TabButton;
