import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './style';
import UserNum from '../UserNum';
import {DefaultAvatar} from '../../assets/icons';
import {colors} from '../../theme/colors';

const UserInfo = ({userLocation, userName, imageURL, postNum}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {imageURL?.length !== 0 ? (
          <Image
            source={{uri: imageURL}}
            style={styles.userImage}
            resizeMode="cover"
          />
        ) : (
          <DefaultAvatar width={85} fill={colors.whiteColor} />
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
