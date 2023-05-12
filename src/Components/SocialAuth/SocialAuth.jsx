import React from 'react';
import {View} from 'react-native';
import {FacebookIcon, GoogleIcon} from '../../assets/icons';
import {colors} from '../../theme/colors';
import styles from './style';

const SocialAuth = () => {
  return (
    <View style={styles.socialContainer}>
      <View style={styles.google}>
        <GoogleIcon width={22} fill={colors.purpleColor} />
      </View>
      <View style={styles.google}>
        <FacebookIcon width={22} fill={colors.purpleColor} />
      </View>
    </View>
  );
};

export default SocialAuth;
