import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './style';
import UserNum from '../UserNum';
import {DefaultAvatar} from '../../assets/icons';
import {colors} from '../../theme/colors';
import {Storage} from 'aws-amplify';

const UserInfo = ({userLocation, userName, postNum, userData}) => {
  console.log(userLocation);
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
        {url === null ? (
          <DefaultAvatar width={85} fill={colors.whiteColor} />
        ) : (
          <Image
            source={{uri: url}}
            style={styles.userImage}
            resizeMode="cover"
          />
        )}
      </View>

      <View>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.userLocation}>
          Локация: <Text style={styles.userStreet}>{userLocation}</Text>
        </Text>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <UserNum num={postNum} subTitle="Постов" />
            {/*<UserNum num={5} subTitle="Завершеных" />*/}
            {/*<UserNum num={20} subTitle="Активных" />*/}
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserInfo;
