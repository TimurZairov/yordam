import {StyleSheet} from 'react-native';
import {colors, mainColors} from '../../theme/colors';

export default StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.whiteColor,
    // position: 'absolute',
    // bottom: 0,
    borderTopWidth: 1,
    borderColor: mainColors.grayColor,
  },
  input: {
    width: '80%',
  },
});
