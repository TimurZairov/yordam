import {StyleSheet} from 'react-native';
import {colors, mainColors} from '../../../theme/colors';
import fonts from '../../../theme/fonts';

export default StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 15,
  },
  saveContainer: {
    flex: 1,
    backgroundColor: mainColors.whiteColor,
  },
  container: {
    paddingHorizontal: 15,
    backgroundColor: mainColors.whiteColor,
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoText: {
    fontSize: fonts.fontSize.lg,
    fontFamily: fonts.fontFamily.bold,
    color: colors.blackColor,
  },
  authText: {
    color: colors.blackColor,
    fontFamily: fonts.fontFamily.bold,
    fontSize: fonts.fontSize.lg,
    marginTop: 15,
  },
  forgotPassword: {
    textAlign: 'right',
    marginTop: 15,
    color: colors.grayColor,
    fontSize: fonts.fontSize.default,
  },
  socialIcons: {
    alignItems: 'center',
    marginTop: 15,
  },
  registry: {
    color: mainColors.mainColor,
    fontSize: fonts.fontSize.md,
    fontFamily: fonts.fontFamily.bold,
    marginTop: 15,
    textAlign: 'center',
  },
  login: {
    marginBottom: 15,
  },
});
