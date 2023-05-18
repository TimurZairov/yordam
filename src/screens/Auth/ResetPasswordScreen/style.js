import {StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';
import fonts from '../../../theme/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  reset: {
    fontSize: fonts.fontSize.md,
    fontFamily: fonts.fontFamily.bold,
    color: colors.blackColor,
  },
  auth: {
    color: colors.darkGrayColor,
    textAlign: 'center',
    marginTop: 20,
  },
});
