import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './style';
import {DefaultAvatar} from '../../assets/icons';
import {mainColors} from '../../theme/colors';
import {Storage} from 'aws-amplify';

const UserInfo = ({userLocation, userName, postNum, userData}) => {
  const [url, setUrl] = useState(null);
  useEffect(() => {
    if (userData) {
      const getImageHandler = async () => {
        try {
          const res = await Storage.get(userData.image);
          setUrl(res);
        } catch (e) {
          console.log(e);
        }
      };
      getImageHandler();
    }
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {userData?.image === null || userData?.image === '' ? (
          <DefaultAvatar width={85} fill={mainColors.darkGrayColor} />
        ) : (
          <Image
            source={{uri: url}}
            style={styles.userImage}
            resizeMode="cover"
          />
        )}
      </View>

      <View style={styles.name}>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.userLocation}>
          Локация: <Text style={styles.userStreet}>{userLocation}</Text>
        </Text>
      </View>
    </View>
  );
};

export default UserInfo;
