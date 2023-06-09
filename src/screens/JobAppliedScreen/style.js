import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.backgroundColor,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.whiteColor,
    position: 'absolute',
    bottom: 0,
  },
  input: {
    width: '75%',
  },
  submit: {
    color: colors.purpleColor,
    fontFamily: fonts.fontFamily.bold,
    fontSize: fonts.fontSize.md,
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
});
