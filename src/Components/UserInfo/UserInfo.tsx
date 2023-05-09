import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './style';
import UserNum from '../UserNum';

const UserInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/avatar.png')}
          style={styles.userImage}
          resizeMode="cover"
        />
      </View>

      <View>
        <Text style={styles.userName}>Матлюба Маматкулова</Text>
        <Text style={styles.userLocation}>
          Локация:{' '}
          <Text style={styles.userStreet}>Ташкент, Ул. Комил-Яшин 2</Text>
        </Text>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <UserNum num={20} subTitle="Постов" />
            <UserNum num={5} subTitle="Завершеных" />
            <UserNum num={20} subTitle="Активных" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserInfo;
