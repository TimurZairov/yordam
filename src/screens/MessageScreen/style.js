import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: colors.backgroundColor,
    flex: 1,
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 15,
  },
  message: {
    padding: 8,
    backgroundColor: colors.purpleColor,
    borderRadius: 15,
    alignSelf: 'flex-end',
    marginVertical: 10,
    color: colors.whiteColor,
  },
  messageReceived: {
    padding: 8,
    backgroundColor: colors.lightGrayColor,
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
