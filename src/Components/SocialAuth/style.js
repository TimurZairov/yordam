import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export default StyleSheet.create({
  socialContainer: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  google: {
    width: 50,
    height: 50,
    backgroundColor: colors.blackColor,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
