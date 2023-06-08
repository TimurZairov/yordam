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
    fontFamily: fonts.fontFamily.bold,
    color: colors.blackColor,
  },
  title: {
    marginTop: 5,
  },
  input: {
    padding: 6,
    borderWidth: 1,
    marginVertical: 5,
    borderRadius: 10,
    borderColor: colors.lightGrayColor,
  },
});
