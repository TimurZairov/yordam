import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: colors.backgroundColor,
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: fonts.fontSize.md,
    color: colors.blackColor,
    fontFamily: fonts.fontFamily.light,
    marginTop: 15,
  },

  scrollView: {
    paddingVertical: 15,
  },
});
