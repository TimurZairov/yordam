import {StyleSheet} from 'react-native';
import {colors, mainColors} from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  filterButton: {
    paddingHorizontal: 32,
    paddingVertical: 9,
    backgroundColor: mainColors.lightGrayColor,
    borderRadius: 20,
    elevation: 2,
    alignSelf: 'flex-start',
    marginRight: 10,
    marginBottom: 2,
  },
  filterButtonActive: {
    paddingHorizontal: 32,
    paddingVertical: 9,
    backgroundColor: mainColors.whiteColor,
    borderRadius: 20,
    elevation: 2,
    alignSelf: 'flex-start',
    marginRight: 10,
    marginBottom: 2,
    borderColor: mainColors.blueColor,
    borderWidth: 1,
  },
  textActive: {
    color: mainColors.blueColor,
    fontFamily: fonts.fontFamily.bold,
    fontSize: fonts.fontSize.md,
  },
  text: {
    fontFamily: fonts.fontFamily.light,
    color: colors.darkGrayColor,
  },
});
