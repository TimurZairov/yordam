import React from 'react';
import styles from './style';
import {Text, View} from 'react-native';

interface IUserNum {
  num: number;
  subTitle: string;
}

const UserNum = ({num, subTitle}: IUserNum) => {
  return (
    <View style={styles.container}>
      <Text style={styles.num}>{num}</Text>
      <Text>{subTitle}</Text>
    </View>
  );
};

export default UserNum;
