import {StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';
import fonts from '../../../theme/fonts';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: colors.backgroundColor,
    flex: 1,
  },
  comments: {
    fontFamily: fonts.fontFamily.bold,
    fontSize: fonts.fontSize.default,
    color: colors.blackColor,
    marginTop: 15,
  },
  commentContainer: {
    backgroundColor: colors.whiteColor,
    paddingHorizontal: 14,
    paddingVertical: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  commentImage: {
    width: 39,
    height: 39,
    borderRadius: 20,
    marginRight: 5,
  },
  textContainer: {
    flex: 1,
  },
  commentName: {
    fontSize: fonts.fontSize.s,
    fontFamily: fonts.fontFamily.bold,
    color: colors.blackColor,
  },
  commentText: {
    color: colors.darkGrayColor,
    fontSize: fonts.fontSize.s,
    fontFamily: fonts.fontFamily.semiBold,
  },
  activity: {
    flex: 1,
  },
  postBtn: {
    padding: 6,
    backgroundColor: colors.purpleColor,
    marginLeft: 5,
    borderRadius: 5,
  },
  btnText: {
    color: 'red',
  },
});
