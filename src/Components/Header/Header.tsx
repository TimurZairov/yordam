import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import {DrawerIcon, Notifications} from '../../assets/icons';
import {colors} from '../../theme/colors';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <DrawerIcon
          height={19}
          fill={colors.blackColor}
          style={styles.drawerIcon}
        />
        <Text style={styles.greetingText}>
          Привет, <Text style={styles.userName}>Тимур</Text>{' '}
        </Text>
      </View>
      <Notifications height={19} fill={colors.blackColor} />
    </View>
  );
};

export default Header;
