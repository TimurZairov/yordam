import React from 'react';
import {Pressable, View} from 'react-native';
import {FacebookIcon, GoogleIcon} from '../../assets/icons';
import {colors} from '../../theme/colors';
import styles from './style';
import {Auth} from 'aws-amplify';
import {CognitoHostedUIIdentityProvider} from '@aws-amplify/auth/src/types/Auth';

const SocialAuth = () => {
  const goggleSingUpHandler = async () => {
    try {
      await Auth.federatedSignIn({
        provider: CognitoHostedUIIdentityProvider.Facebook,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const facebookSingUpHandler = () => {};

  return (
    <View style={styles.socialContainer}>
      <Pressable style={styles.google} onPress={goggleSingUpHandler}>
        <GoogleIcon width={22} fill={colors.purpleColor} />
      </Pressable>
      <Pressable style={styles.google} onPress={facebookSingUpHandler}>
        <FacebookIcon width={22} fill={colors.purpleColor} />
      </Pressable>
    </View>
  );
};

export default SocialAuth;
