import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  userData: {
    borderBottomWidth: 1,
    borderBottomColor: colors.darkGrayColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 27,
    paddingBottom: 12,
  },
  userText: {
    fontSize: fonts.fontSize.md,
    fontFamily: fonts.fontFamily.bold,
    color: colors.blackColor,
  },
  userEmail: {
    fontSize: fonts.fontSize.md,
    fontFamily: fonts.fontFamily.light,
    color: colors.blackColor,
  },
});
