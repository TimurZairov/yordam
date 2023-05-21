import React, {useContext} from 'react';
import {Pressable, Text, View} from 'react-native';
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

const CustomDrawerNavigation = ({navigation}) => {
  const {user} = useContext(AppContext);
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
              <DefaultAvatar width={85} />
            </View>
          </View>
        </View>
        <Text style={styles.name}>Матлюба Маматкулова</Text>
        <Text style={styles.location}>
          Локация:{' '}
          <Text style={styles.address}> Ташкент, Ул. Комил-Яшин 2</Text>
        </Text>
        <Text style={styles.phone}>+998 99 591 48 83</Text>
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
