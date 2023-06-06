import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: 15,
  },
  map: {
    flex: 1,
  },
  jobInfoContainer: {
    padding: 15,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  jobInfo: {
    padding: 11,
    backgroundColor: colors.whiteColor,
    borderRadius: 15,
  },
  jobUserName: {
    fontSize: fonts.fontSize.default,
  },
  markerContainer: {
    width: 150,
    height: 150,
  },
  btn: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
});
