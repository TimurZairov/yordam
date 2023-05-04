import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  cardContainer: {
    width: '100%',
    backgroundColor: colors.whiteColor,
    padding: 11,
    borderRadius: 15,
    elevation: 2,
    marginBottom: 15,
  },
  info: {
    flexDirection: 'row',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfoImage: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 30,
    marginRight: 7,
  },
  userInfo: {},
  userInfoText: {
    fontFamily: fonts.fontFamily.bold,
    color: colors.blackColor,
    fontSize: fonts.fontSize.default,
  },
  userText: {
    fontSize: fonts.fontSize.s,
    color: colors.darkGrayColor,
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  price: {
    paddingVertical: 3,
    paddingHorizontal: 5,
    backgroundColor: colors.blackColor,
    borderRadius: 5,
    marginBottom: 3,
  },
  priceTExt: {
    fontSize: fonts.fontSize.s,
    color: colors.whiteColor,
    fontFamily: fonts.fontFamily.semiBold,
  },
  time: {
    fontSize: fonts.fontSize.s,
    fontFamily: fonts.fontFamily.light,
    color: colors.darkGrayColor,
  },
  userJobTitle: {
    fontFamily: fonts.fontFamily.bold,
    color: colors.blackColor,
    fontSize: fonts.fontSize.default,
    marginVertical: 5,
  },
  userInfoFooter: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  usersAgreed: {
    fontSize: fonts.fontSize.s,
    fontFamily: fonts.fontFamily.bold,
    color: colors.blackColor,
  },
});
