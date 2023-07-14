import React, {useEffect, useState} from 'react';
import {Image, Linking, Pressable, Text, View} from 'react-native';
import styles from './style';
import {Storage} from 'aws-amplify';
import {DefaultAvatar, PhoneIcon} from '../../assets/icons';
import {colors} from '../../theme/colors';

const UserCard = ({userList}) => {
  const [image, setImage] = useState(null);

  //call To Specialist
  const dialPressHandler = phoneNumber => {
    const url = `tel:${phoneNumber}`;
    Linking.openURL(url)
      .then(supported => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          console.log('Невозможно набрать номер');
        }
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    if (userList.image) {
      const userImageHandler = async () => {
        const userImage = await Storage.get(userList.image);
        setImage(userImage);
      };
      userImageHandler();
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        {image !== null ? (
          <Image source={{uri: image}} style={styles.userImage} />
        ) : (
          <DefaultAvatar
            fill={colors.grayColor}
            width={50}
            style={styles.defaultAvatar}
          />
        )}
        <View style={styles.contact}>
          <View>
            <Text style={styles.name}>{userList.name}</Text>
            <Text style={styles.phone}>{userList.phoneNumber}</Text>
            <Text style={styles.phone}>{userList.email}</Text>
          </View>
          <Pressable onPress={() => dialPressHandler(userList?.phoneNumber)}>
            <PhoneIcon width={20} />
          </Pressable>
        </View>
      </View>
      {userList.userJob ? (
        <Text style={styles.jobTitle}>Что я умею:</Text>
      ) : (
        <Text style={styles.jobTitle}>Пользователь не указал сферу работ</Text>
      )}
      {userList.userJob ? (
        <View style={styles.jobsContainer}>
          {userList.userJob
            ? userList.userJob?.map(item => {
                return (
                  <View key={item.toString()} style={styles.jobs}>
                    <Text>{item}</Text>
                  </View>
                );
              })
            : null}
        </View>
      ) : null}
    </View>
  );
};

export default UserCard;
