import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export default StyleSheet.create({
  saveArea: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 15,
    backgroundColor: colors.backgroundColor,
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
});
