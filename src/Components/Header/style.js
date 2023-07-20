import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  headerContainer: {
    marginTop: 25,
    marginBottom: 16,
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
  userName: {
    fontFamily: fonts.fontFamily.bold,
  },
});
