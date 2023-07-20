import React, {useContext, useEffect} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {colors, mainColors} from '../../theme/colors';
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

const CustomDrawerNavigation = props => {
  const {navigation} = props;
  const {userId} = useContext(AppContext);
  //custom hook
  const [imageKey, getImageHandler] = useUserImage();
  const [data] = useGetUser(userId);

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
    navigation.navigate('Auth', {screen: 'Login'});
  };

  useEffect(() => {
    if (user) {
      const getImage = async () => {
        await getImageHandler(user?.image);
      };
      getImage();
    }
  }, [user]);

  return (
    <View style={styles.drawerContainer}>
      <View style={styles.header}>
        <View style={styles.drawerHeader}>
          <Pressable style={styles.drawerBack} onPress={closeDrawer}>
            <ArrowLeftIcon width={25} fill={mainColors.mainColor} />
          </Pressable>
        </View>
        {user ? (
          <>
            <View style={styles.image}>
              <View style={styles.imageContainer}>
                <View style={styles.background}>
                  {user?.image === null || user?.image === '' ? (
                    <DefaultAvatar width={85} fill={colors.whiteColor} />
                  ) : (
                    <Image
                      source={{uri: imageKey || null}}
                      resizeMode={'contain'}
                      style={{width: 85, height: 85, borderRadius: 45}}
                    />
                  )}
                </View>
              </View>
            </View>
            <Text style={styles.name}>{user?.name}</Text>
            <Text style={styles.location}>
              Email: <Text style={styles.address}>{user?.email}</Text>
            </Text>
            <Text style={styles.phone}>{user?.phoneNumber}</Text>
          </>
        ) : null}
      </View>
      <View style={styles.listContainer}>
        <AboutIcon width={15} height={15} fill={mainColors.mainColor} />
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
