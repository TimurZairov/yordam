import {StyleSheet} from 'react-native';
import {colors, mainColors} from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  cardContainer: {
    width: '100%',
    backgroundColor: mainColors.whiteColor,
    padding: 11,
    borderRadius: 15,
    elevation: 2,
    marginBottom: 15,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  userInfo: {
    marginLeft: 15,
  },
  icon: {
    borderRadius: 10,
    backgroundColor: mainColors.transparentColor,
  },
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
    backgroundColor: mainColors.orangeColor,
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
  btnContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  btnRemove: {
    paddingHorizontal: 15,
    paddingVertical: 6,
    backgroundColor: mainColors.orangeColor,
    marginRight: 12,
    borderRadius: 5,
  },
  btnText: {
    fontSize: fonts.fontSize.default,
    fontFamily: fonts.fontFamily.semiBold,
  },
});
