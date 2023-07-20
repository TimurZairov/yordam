import {StyleSheet} from 'react-native';
import {colors, mainColors} from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: mainColors.whiteColor,
    flex: 1,
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 15,
  },
  message: {
    padding: 15,
    backgroundColor: mainColors.mainColor,
    borderRadius: 15,
    alignSelf: 'flex-end',
    marginVertical: 10,
    color: colors.whiteColor,
  },
  messageReceived: {
    padding: 15,
    backgroundColor: mainColors.orangeColor,
    borderRadius: 15,
    alignSelf: 'flex-start',
  },
  textInputContainer: {
    height: 50,
    backgroundColor: colors.purpleColor,
  },
  time: {
    fontSize: fonts.fontSize.es,
  },
});
