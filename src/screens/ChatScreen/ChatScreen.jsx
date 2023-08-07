import React from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import {mainColors} from '../../theme/colors';
import Header from '../../Components/Header';
import users from '../../data/chatUsers.json';
import styles from './style';
import {DefaultAvatar} from '../../assets/icons';
import dayjs from 'dayjs';

const ChatScreen = () => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.chatUserCard}>
        <View style={styles.userAvatarContainer}>
          {item.photo === '' ||
          item.photo === null ||
          item.photo.length === 0 ? (
            <DefaultAvatar width={85} fill={mainColors.grayColor} />
          ) : (
            <Image source={{uri: item.photo}} style={styles.image} />
          )}
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.lastSeen}>
              {dayjs(item?.timestamp).fromNow()}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={users}
        renderItem={renderItem}
        ListEmptyComponent={<Text>Начните чат...</Text>}
      />
    </View>
  );
};

export default ChatScreen;
