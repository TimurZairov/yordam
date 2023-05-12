import React from 'react';
import styles from './style';
import {Text, View} from 'react-native';

const UserNum = ({num, subTitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.num}>{num}</Text>
      <Text>{subTitle}</Text>
    </View>
  );
};

export default UserNum;
