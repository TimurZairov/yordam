import {StyleSheet} from 'react-native';
import {colors, mainColors} from '../../../theme/colors';
import fonts from '../../../theme/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  text: {
    fontFamily: fonts.fontFamily.bold,
    fontSize: fonts.fontSize.md,
    color: mainColors.mainColor,
  },
  loginScreen: {
    textAlign: 'center',
    marginTop: 15,
  },
});
