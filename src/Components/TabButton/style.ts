import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  buttonContainer: {},
  button: {
    paddingHorizontal: 32,
    paddingVertical: 9,
    backgroundColor: colors.whiteColor,
    elevation: 3,
    borderRadius: 50,
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
