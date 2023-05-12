import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: colors.backgroundColor,
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  logoText: {
    fontFamily: fonts.fontFamily.bold,
    fontSize: fonts.fontSize.md,
    color: colors.blackColor,
    marginTop: 6,
  },
  createTitle: {
    fontFamily: fonts.fontFamily.bold,
    fontSize: fonts.fontSize.lg,
    color: colors.blackColor,
    marginTop: 12,
  },
});
