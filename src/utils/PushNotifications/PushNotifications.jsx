import {useEffect, useState} from 'react';
import messaging from '@react-native-firebase/messaging';
import {useNavigation} from '@react-navigation/native';

// Register background handler if app closed or in background mode
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log(
    'Message handled in the background!',
    JSON.stringify(remoteMessage, null, 2),
  );
});

const PushNotifications = () => {
  const [enabled, setEnabled] = useState(false);
  const [token, setToken] = useState('');
  const navigation = useNavigation();

  // PERMISSION for authorization status when component mounted
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleMessage = async remoteMessage => {
    console.log(JSON.stringify(remoteMessage, null, 2));
    if (!remoteMessage) {
      return;
    }

    if (remoteMessage?.data?.postId) {
      navigation.navigate('Post', {id: remoteMessage.data.postId});
    }
  };

  //check is token enable to send getNotifications
  useEffect(() => {
    if (!enabled) {
      return;
    }
    //when app is active
    messaging().onMessage(handleMessage);
    //when app is background
    messaging().onNotificationOpenedApp(handleMessage);

    messaging().getInitialNotification().then(handleMessage);
  }, [enabled, handleMessage]);

  // GET TOKEN || registry device for pushing notification via firebase.messaging
  const getDeviceToken = async () => {
    await messaging().registerDeviceForRemoteMessages();
    const newToken = await messaging().getToken();
    console.log(newToken);
  };

  return null;
};

export default PushNotifications;
