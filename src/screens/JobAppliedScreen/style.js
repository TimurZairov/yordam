import {StyleSheet} from 'react-native';
import {colors, mainColors} from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: mainColors.whiteColor,
    paddingBottom: 15,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.whiteColor,
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderColor: mainColors.grayColor,
  },
  input: {
    width: '80%',
  },
  submit: {
    color: colors.purpleColor,
    fontFamily: fonts.fontFamily.bold,
    fontSize: fonts.fontSize.md,
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
  commentContainer: {
    padding: 10,
    backgroundColor: mainColors.gray,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  avatar: {
    width: 40,
    aspectRatio: 1,
    backgroundColor: mainColors.whiteColor,
    borderRadius: 20,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyList: {
    textAlign: 'center',
  },
  name: {
    fontFamily: fonts.fontFamily.bold,
    color: colors.blackColor,
    marginRight: 10,
    fontSize: fonts.fontSize.s,
  },
});
