import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 15,
  },
  saveContainer: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 15,
    backgroundColor: colors.backgroundColor,
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: '40%',
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
    marginTop: 45,
    textAlign: 'center',
  },
  forgotPassword: {
    textAlign: 'center',
    marginTop: 15,
    color: colors.darkGrayColor,
    fontSize: fonts.fontSize.md,
    marginBottom: 25,
  },
});
