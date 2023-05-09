import React from 'react';
import styles from './style';
import {Text, View} from 'react-native';

interface IUserData {
  name: string;
  userData?: string;
}

const UserData = ({name, userData}: IUserData) => {
  return (
    <View style={styles.userData}>
      <Text style={styles.userText}>{name}</Text>
      <Text style={styles.userEmail}>{userData}</Text>
    </View>
  );
};

export default UserData;
