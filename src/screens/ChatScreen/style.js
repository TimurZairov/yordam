import {StyleSheet} from 'react-native';
import {mainColors} from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainColors.whiteColor,
    paddingHorizontal: 15,
  },
  chatUserCard: {
    padding: 10,
    borderRadius: 10,
    borderColor: mainColors.gray,
    borderWidth: 1,
    marginTop: 6,
  },
  userAvatarContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 50,
  },
  name: {
    fontFamily: fonts.fontFamily.bold,
    fontSize: fonts.fontSize.md,
    color: mainColors.blackColor,
  },
  textContainer: {
    marginLeft: 10,
  },
});
