import React from 'react';
import styles from './style';
import {Text, View} from 'react-native';

const UserData = ({name, userData}) => {
  return (
    <View style={styles.userData}>
      <Text style={styles.userText}>{name}</Text>
      <Text style={styles.userEmail}>{!userData ? 'нет' : 'да'}</Text>
    </View>
  );
};

export default UserData;
