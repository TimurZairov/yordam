import {StyleSheet} from 'react-native';
import {mainColors} from '../../theme/colors';

export default StyleSheet.create({
  saveArea: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 15,
    backgroundColor: mainColors.whiteColor,
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
});
