import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import {colors} from '../../theme/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 3,
  },
  num: {
    fontFamily: fonts.fontFamily.bold,
    color: colors.blackColor,
    fontSize: fonts.fontSize.default,
  },
  subTitle: {
    fontFamily: fonts.fontFamily.md,
    color: colors.darkGrayColor,
    fontSize: fonts.fontSize.default,
  },
});
