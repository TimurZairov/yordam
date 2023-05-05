import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import {DrawerIcon, Notifications} from '../../assets/icons';
import {colors} from '../../theme/colors';

interface IHeader {
  login?: boolean;
  registry?: boolean;
}

const Header = ({login, registry}: IHeader) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <DrawerIcon
          height={19}
          fill={colors.blackColor}
          style={styles.drawerIcon}
        />
        {!login ||
          (!registry && (
            <Text style={styles.greetingText}>
              Привет, <Text style={styles.userName}>Тимур</Text>{' '}
            </Text>
          ))}
      </View>
      {!login ||
        (!registry && <Notifications height={19} fill={colors.blackColor} />)}
    </View>
  );
};

export default Header;
