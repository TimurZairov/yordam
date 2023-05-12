import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  filterButton: {
    paddingHorizontal: 32,
    paddingVertical: 9,
    backgroundColor: colors.whiteColor,
    borderRadius: 20,
    elevation: 2,
    alignSelf: 'flex-start',
    marginRight: 10,
    marginBottom: 2,
  },
  textActive: {
    color: colors.purpleColor,
    fontFamily: fonts.fontFamily.bold,
    fontSize: fonts.fontSize.md,
  },
  text: {
    fontFamily: fonts.fontFamily.light,
    color: colors.darkGrayColor,
  },
});
