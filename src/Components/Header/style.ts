import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import {colors} from '../../theme/colors';

export default StyleSheet.create({
  headerContainer: {
    marginVertical: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    height: 21,
    alignItems: 'center',
  },
  drawerIcon: {
    marginRight: 28,
  },
  greetingText: {
    fontSize: fonts.fontSize.lg,
    lineHeight: 21,
    color: colors.blackColor,
    fontFamily: fonts.fontFamily.light,
  },
  userName: {
    // fontWeight: fonts.fontWeight.full,
    fontFamily: 'OpenSans-Bold',
  },
});
