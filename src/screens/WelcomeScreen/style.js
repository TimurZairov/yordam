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
    backgroundColor: colors.backgroundColor,
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: '15%',
  },
  logoText: {
    fontSize: fonts.fontSize.lg,
    fontFamily: fonts.fontFamily.bold,
    color: colors.blackColor,
  },
  image: {
    width: 300,
    height: 300,
  },
  authText: {
    color: colors.blackColor,
    fontFamily: fonts.fontFamily.bold,
    fontSize: fonts.fontSize.lg,
    textAlign: 'center',
  },
  forgotPassword: {
    textAlign: 'center',
    color: colors.darkGrayColor,
    fontSize: fonts.fontSize.md,
  },
});
