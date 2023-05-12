import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  button: {
    width: '48%',
    paddingVertical: 9,
    backgroundColor: colors.whiteColor,
    elevation: 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabScreenText: {
    color: colors.purpleColor,
    fontFamily: fonts.fontFamily.bold,
    fontSize: fonts.fontSize.md,
  },
  tabScreenTextActive: {
    fontFamily: fonts.fontFamily.light,
    color: colors.darkGrayColor,
  },
});
