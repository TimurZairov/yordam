import {StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';
import fonts from '../../../theme/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: colors.backgroundColor,
  },
  confirm: {
    fontSize: fonts.fontSize.md,
    fontFamily: fonts.fontFamily.bold,
    color: colors.blackColor,
    marginTop: 20,
  },
  auth: {
    color: colors.darkGrayColor,
    textAlign: 'center',
    marginTop: 15,
  },
});
