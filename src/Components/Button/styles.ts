import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  button: {
    paddingVertical: 15,
    backgroundColor: colors.purpleColor,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  title: {
    color: colors.blackColor,
    fontFamily: fonts.fontFamily.bold,
    fontSize: fonts.fontSize.lg,
  },
});
