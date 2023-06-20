import React, {useContext, useEffect, useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {colors} from '../../theme/colors';
import styles from './style';
import {
  AboutIcon,
  ArrowLeftIcon,
  DefaultAvatar,
  SignInIcon,
  SignOutIcon,
} from '../../assets/icons';
import {Auth} from 'aws-amplify';
import {AppContext} from '../../context/Context';
import useUserImage from '../../utils/custom/useUserImage';
import useGetUser from '../../utils/custom/useGetUser/useGetUser';

const CustomDrawerNavigation = ({navigation}) => {
  const [imageUrl, setImageUrl] = useState(null);

  const {userId} = useContext(AppContext);
  //custom hook
  const [imageKey] = useUserImage(user?.image);
  const [data, loading, error] = useGetUser(userId);

  const user = data?.getUser;

  const closeDrawer = () => {
    navigation.closeDrawer();
  };

  const navigateAboutScreenHandler = () => {
    navigation.navigate('About');
  };

  const signOutHandler = async () => {
    try {
      await Auth.signOut();
      navigation.closeDrawer();
    } catch (e) {
      console.log(e.message);
    }
  };

  const loginHandler = () => {
    navigation.navigate('Login');
  };

  useEffect(() => {
    if (imageKey) {
      console.log(imageKey);
      setImageUrl(imageKey);
    }
  }, [imageKey]);

  return (
    <View style={styles.drawerContainer}>
      <View style={styles.header}>
        <View style={styles.drawerHeader}>
          <Pressable style={styles.drawerBack} onPress={closeDrawer}>
            <ArrowLeftIcon width={25} fill={colors.whiteColor} />
          </Pressable>
        </View>
        <View style={styles.image}>
          <View style={styles.imageContainer}>
            <View style={styles.background}>
              {imageUrl ? (
                <Image
                  source={{uri: imageUrl}}
                  style={styles.userImage}
                  resizeMode="cover"
                />
              ) : (
                <DefaultAvatar width={85} />
              )}
            </View>
          </View>
        </View>
        <Text style={styles.name}>{user?.name}</Text>
        <Text style={styles.location}>
          Email: <Text style={styles.address}>{user?.email}</Text>
        </Text>
        <Text style={styles.phone}>{user?.phoneNumber}</Text>
      </View>
      <View style={styles.listContainer}>
        <AboutIcon width={15} height={15} fill={colors.blackColor} />
        <Text
          style={styles.about}
          onPress={navigateAboutScreenHandler}
          hotSlop={5}>
          О приложении
        </Text>
      </View>

      {user ? (
        <View style={styles.listContainer}>
          <SignOutIcon width={15} height={15} fill={colors.blackColor} />
          <Text style={styles.about} hotSlop={5} onPress={signOutHandler}>
            Выйти
          </Text>
        </View>
      ) : (
        <View style={styles.listContainer}>
          <SignInIcon width={15} height={15} fill={colors.blackColor} />
          <Text style={styles.about} hotSlop={5} onPress={loginHandler}>
            Войти
          </Text>
        </View>
      )}
    </View>
  );
};

export default CustomDrawerNavigation;
