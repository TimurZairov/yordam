import React from 'react';
import {Pressable, View} from 'react-native';
import {FacebookIcon, GoogleIcon} from '../../assets/icons';
import {mainColors} from '../../theme/colors';
import styles from './style';
import {Auth} from 'aws-amplify';
import {CognitoHostedUIIdentityProvider} from '@aws-amplify/auth/src/types/Auth';

const SocialAuth = () => {
  const goggleSingUpHandler = async () => {
    try {
      await Auth.federatedSignIn({
        provider: CognitoHostedUIIdentityProvider.Google,
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const facebookSingUpHandler = async () => {
    try {
      await Auth.federatedSignIn({
        provider: CognitoHostedUIIdentityProvider.Google,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.socialContainer}>
      <Pressable style={styles.google} onPress={facebookSingUpHandler}>
        <GoogleIcon width={22} fill={mainColors.whiteColor} />
      </Pressable>
      <Pressable style={styles.google} onPress={goggleSingUpHandler}>
        <FacebookIcon width={22} fill={mainColors.whiteColor} />
      </Pressable>
    </View>
  );
};

export default SocialAuth;
