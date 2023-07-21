import {StyleSheet} from 'react-native';
import {colors, mainColors} from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: mainColors.whiteColor,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 2,
  },
  userInfo: {
    flexDirection: 'row',
  },
  name: {
    fontSize: fonts.fontSize.md,
    color: colors.blackColor,
    fontFamily: fonts.fontFamily.bold,
  },
  contact: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  jobsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  jobs: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: mainColors.darkGrayColor,
    backgroundColor: mainColors.gray,
    marginRight: 10,
    borderRadius: 50,
  },
  jobTitle: {
    fontSize: fonts.fontSize.md,
    fontFamily: fonts.fontFamily.bold,
    color: colors.blackColor,
    marginTop: 5,
  },
});
