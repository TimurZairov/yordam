import React from 'react';
import styles from './style';
import {Text, View} from 'react-native';

const UserData = ({name, info}) => {
  return (
    <View style={styles.userData}>
      <Text style={styles.userText}>{name}</Text>
      {info ? (
        <Text style={styles.userEmail}>{info}</Text>
      ) : (
        <Text style={styles.userEmail}>Нет</Text>
      )}
    </View>
  );
};

export default UserData;
