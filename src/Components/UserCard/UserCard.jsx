import React, {useEffect, useState} from 'react';
import {Linking, Pressable, Text, View} from 'react-native';
import styles from './style';
import {Storage} from 'aws-amplify';
import {PhoneIcon} from '../../assets/icons';
import {mainColors} from '../../theme/colors';

const UserCard = ({userList}) => {
  const [image, setImage] = useState(null);

  //call To Specialist
  const dialPressHandler = phoneNumber => {
    if (
      phoneNumber === '' ||
      phoneNumber === null ||
      phoneNumber === undefined
    ) {
      return;
    }
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
        <View style={styles.contact}>
          <View>
            <Text>
              Имя: {'  '} <Text style={styles.name}>{userList.name}</Text>
            </Text>
            <Text>
              Номер телефона: {'  '}
              <Text style={styles.name}>{userList.phoneNumber}</Text>
            </Text>
          </View>
          <Pressable onPress={() => dialPressHandler(userList?.phoneNumber)}>
            <PhoneIcon width={20} fill={mainColors.mainColor} />
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
