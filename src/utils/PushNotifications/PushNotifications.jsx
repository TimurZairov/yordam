import React, {useEffect, useState} from 'react';
import messaging from '@react-native-firebase/messaging';

const PushNotifications = () => {
  const [enabled, setEnabled] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    async function requestUserPermission() {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
        setEnabled(true);
        await getDeviceToken();
      }
    }

    requestUserPermission();
  }, []);

  const getDeviceToken = async () => {
    await messaging().registerDeviceForRemoteMessages();
    const newToken = await messaging().getToken();
    console.log(newToken);
  };

  console.log(token);

  return null;
};

export default PushNotifications;
