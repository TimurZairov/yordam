import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import {DrawerIcon, EditIcon, Notifications} from '../../assets/icons';
import {colors} from '../../theme/colors';

const Header = ({login, registry, profile, onPress}) => {
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
      {profile ? (
        <EditIcon width={30} fill={colors.blackColor} onPress={onPress} />
      ) : null}
    </View>
  );
};

export default Header;
