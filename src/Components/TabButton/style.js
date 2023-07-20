import {StyleSheet} from 'react-native';
import {colors, mainColors} from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  button: {
    width: '48%',
    paddingVertical: 9,
    backgroundColor: mainColors.whiteColor,
    elevation: 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonActive: {
    width: '48%',
    paddingVertical: 9,
    backgroundColor: mainColors.whiteColor,
    elevation: 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: mainColors.mainColor,
    borderWidth: 1,
  },
  tabScreenText: {
    color: mainColors.mainColor,
    fontFamily: fonts.fontFamily.bold,
    fontSize: fonts.fontSize.md,
  },
  tabScreenTextActive: {
    fontFamily: fonts.fontFamily.light,
    color: colors.darkGrayColor,
  },
});
