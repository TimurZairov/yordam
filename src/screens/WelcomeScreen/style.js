import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  saveContainer: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: '10%',
  },
  logoText: {
    fontSize: fonts.fontSize.lg,
    fontFamily: fonts.fontFamily.bold,
    color: colors.blackColor,
  },
  image: {
    width: 250,
    height: 250,
  },
  authText: {
    color: colors.blackColor,
    fontFamily: fonts.fontFamily.regular,
    fontSize: fonts.fontSize.md,
    textAlign: 'center',
  },
  forgotPassword: {
    textAlign: 'center',
    color: colors.darkGrayColor,
    fontSize: fonts.fontSize.md,
  },
});
