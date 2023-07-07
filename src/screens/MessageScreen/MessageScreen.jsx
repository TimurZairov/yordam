import React from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './style';
import Header from '../../Components/Header';
import dayjs from 'dayjs';

const MessageScreen = () => {
  const messages = [
    {
      id: 1,
      senderId: 1,
      receiverId: 2,
      content: 'Hello Alice!',
      timestamp: '2023-07-01T14:02:30.036Z',
    },
    {
      id: 2,
      senderId: 2,
      receiverId: 1,
      content: 'Hi John! How are you?',
      timestamp: '2023-07-01T14:05:15.123Z',
    },
    {
      id: 3,
      senderId: 1,
      receiverId: 2,
      content: "I'm doing great, thanks! How about you?",
      timestamp: '2023-07-01T14:08:02.789Z',
    },
  ];
  const userId = 1;
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={messages}
        renderItem={({item}) => {
          return (
            <>
              <View
                style={
                  item.senderId === 1 ? styles.message : styles.messageReceived
                }>
                <Text>{item.content}</Text>
                <Text style={styles.time}>
                  {dayjs(item.timestamp).format('YYYY-MM-DD')}
                </Text>
              </View>
            </>
          );
        }}
        contentContainerStyle={styles.messageContainer}
      />
    </View>
  );
};

export default MessageScreen;
