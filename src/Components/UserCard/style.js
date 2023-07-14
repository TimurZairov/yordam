import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.whiteColor,
    marginVertical: 8,
    borderRadius: 10,
  },
  userImage: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  defaultAvatar: {marginRight: 16},
  name: {
    fontSize: fonts.fontSize.lg,
    color: colors.blackColor,
    fontFamily: fonts.fontFamily.regular,
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
    backgroundColor: colors.whiteColor,
    borderWidth: 1,
    borderColor: colors.purpleColor,
    marginRight: 10,
    borderRadius: 50,
  },
  jobTitle: {
    fontSize: fonts.fontSize.md,
    fontFamily: fonts.fontFamily.regular,
    color: colors.blackColor,
    marginTop: 10,
  },
});
