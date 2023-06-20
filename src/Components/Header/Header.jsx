import React, {useContext} from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './style';
import {DrawerIcon, EditIcon, Notifications} from '../../assets/icons';
import {colors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {AppContext} from '../../context/Context';

const Header = ({registry, profile, onPress}) => {
  const navigation = useNavigation();

  const {user} = useContext(AppContext);

  const drawerHandler = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <TouchableOpacity onPress={drawerHandler}>
          <DrawerIcon
            height={19}
            fill={colors.blackColor}
            style={styles.drawerIcon}
          />
        </TouchableOpacity>
      </View>
      {user && !profile && (
        <Notifications height={19} fill={colors.blackColor} />
      )}

      {profile ? (
        <EditIcon width={30} fill={colors.blackColor} onPress={onPress} />
      ) : null}
    </View>
  );
};

export default Header;
