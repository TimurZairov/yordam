import {StyleSheet} from 'react-native';
import {colors, mainColors} from '../../../theme/colors';
import fonts from '../../../theme/fonts';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: mainColors.whiteColor,
    flex: 1,
  },
  comments: {
    fontFamily: fonts.fontFamily.bold,
    fontSize: fonts.fontSize.default,
    color: colors.blackColor,
    marginVertical: 15,
  },
  userData: {
    borderBottomWidth: 1,
    borderBottomColor: mainColors.grayColor,
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
});
