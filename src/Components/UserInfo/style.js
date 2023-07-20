import {StyleSheet} from 'react-native';
import {colors, mainColors} from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  imageContainer: {
    width: 100,
    height: 100,
    backgroundColor: mainColors.lightGrayColor,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  userImage: {
    width: 85,
    height: 85,
    borderRadius: 100,
  },
  userName: {
    fontFamily: fonts.fontFamily.bold,
    fontSize: fonts.fontSize.default,
    color: colors.blackColor,
  },
  userLocation: {
    fontFamily: fonts.fontFamily.bold,
    fontSize: fonts.fontSize.s,
    color: colors.blackColor,
    marginTop: 3,
  },
  userStreet: {
    fontFamily: fonts.fontFamily.light,
    color: colors.darkGrayColor,
  },
  name: {
    marginTop: 16,
    alignItems: 'center',
  },
});
