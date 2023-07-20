import React, {useContext} from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './style';
import {DrawerIcon, EditIcon} from '../../assets/icons';
import {mainColors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {AppContext} from '../../context/Context';

const Header = ({profile, onPress}) => {
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
            fill={mainColors.mainColor}
            style={styles.drawerIcon}
          />
        </TouchableOpacity>
      </View>
      {profile ? (
        <EditIcon width={30} fill={mainColors.mainColor} onPress={onPress} />
      ) : null}
    </View>
  );
};

export default Header;
