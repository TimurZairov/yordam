import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  header: {
    backgroundColor: colors.drawerColor,
  },
  drawerHeader: {
    paddingVertical: 17,
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: 15,
  },
  drawerBack: {
    width: 37,
    aspectRatio: 1,
    backgroundColor: colors.blackColor,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 94,
    aspectRatio: 1,
    borderRadius: 50,
    backgroundColor: colors.whiteColor,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    alignItems: 'center',
    marginTop: 40,
  },
  background: {
    width: 80,
    aspectRatio: 1,
    backgroundColor: colors.grayColor,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: fonts.fontSize.md,
    fontFamily: fonts.fontFamily.bold,
    color: colors.blackColor,
    textAlign: 'center',
    marginTop: 5,
  },
  location: {
    fontSize: fonts.fontSize.s,
    fontFamily: fonts.fontFamily.bold,
    color: colors.blackColor,
    textAlign: 'center',
    marginTop: 5,
  },
  address: {
    fontSize: fonts.fontSize.s,
    fontFamily: fonts.fontFamily.light,
    color: colors.darkGrayColor,
  },
  phone: {
    fontSize: 16,
    fontFamily: fonts.fontFamily.regular,
    color: colors.blackColor,
    paddingBottom: 27,
    marginTop: 5,
    textAlign: 'center',
  },
  about: {
    fontSize: fonts.fontSize.md,
    fontFamily: fonts.fontFamily.bold,
    color: colors.blackColor,
    paddingVertical: 11,
    paddingHorizontal: 20,
  },
});