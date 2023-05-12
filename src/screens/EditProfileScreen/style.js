import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: colors.backgroundColor,
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
});
