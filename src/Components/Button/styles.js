import {StyleSheet} from 'react-native';
import {colors, mainColors} from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  button: {
    paddingVertical: 16,
    backgroundColor: mainColors.mainColor,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  title: {
    color: colors.blackColor,
    fontFamily: fonts.fontFamily.bold,
    fontSize: fonts.fontSize.lg,
  },
  flatHeader: {
    paddingVertical: 10,
  },
  titleHeader: {
    fontSize: fonts.fontSize.md,
    color: colors.blackColor,
    fontFamily: fonts.fontFamily.light,
    marginTop: 12,
  },
});
