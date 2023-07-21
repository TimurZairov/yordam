import {StyleSheet} from 'react-native';
import {colors, mainColors} from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: mainColors.whiteColor,
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 45,
  },
  imageText: {
    marginTop: 15,
    fontSize: fonts.fontSize.md,
    fontFamily: fonts.fontFamily.bold,
  },
  label: {
    marginTop: 10,
  },
  jobCategory: {
    backgroundColor: colors.whiteColor,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 8,
    marginVertical: 8,
    borderColor: colors.purpleColor,
  },
  text: {
    color: colors.purpleColor,
    fontSize: fonts.fontSize.md,
    fontFamily: fonts.fontFamily.bold,
  },
  active: {
    backgroundColor: colors.purpleColor,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 8,
    marginVertical: 8,
    borderColor: colors.purpleColor,
  },
  activeText: {
    color: colors.whiteColor,
  },
});
