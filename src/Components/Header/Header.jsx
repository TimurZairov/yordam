import React, {useContext} from 'react';
import {Pressable, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {ArrowLeftIcon, DrawerIcon, EditIcon} from '../../assets/icons';
import {mainColors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {AppContext} from '../../context/Context';

const Header = ({profile, onPress, job, jobDetails, location, edit, chat}) => {
  const navigation = useNavigation();

  const {user} = useContext(AppContext);

  const drawerHandler = () => {
    navigation.openDrawer();
  };

  const goToMainScreen = () => {
    navigation.goBack();
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

      {job || jobDetails || location || edit || chat ? (
        <Pressable style={styles.drawerBack} onPress={goToMainScreen}>
          <ArrowLeftIcon width={25} fill={mainColors.mainColor} />
        </Pressable>
      ) : null}
    </View>
  );
};

export default Header;
