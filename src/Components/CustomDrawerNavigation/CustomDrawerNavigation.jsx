import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {colors} from '../../theme/colors';
import styles from './style';
import {ArrowLeftIcon, DefaultAvatar} from '../../assets/icons';

const CustomDrawerNavigation = ({navigation}) => {
  const closeDrawer = () => {
    navigation.closeDrawer();
  };

  const navigateAboutScreenHandler = () => {
    navigation.navigate('About');
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
      <Text
        style={styles.about}
        onPress={navigateAboutScreenHandler}
        hotSlop={5}>
        О приложении
      </Text>
    </View>
  );
};

export default CustomDrawerNavigation;
