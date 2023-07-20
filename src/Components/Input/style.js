import {StyleSheet} from 'react-native';
import {colors, mainColors} from '../../theme/colors';

export default StyleSheet.create({
  input: {
    backgroundColor: colors.whiteColor,
    borderRadius: 10,
    padding: 15,
    marginTop: 15,
    borderColor: mainColors.grayColor,
    borderWidth: 1,
  },
  inputActive: {
    backgroundColor: colors.whiteColor,
    borderRadius: 10,
    padding: 15,
    marginTop: 15,
    borderColor: mainColors.mainColor,
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
  },
});
