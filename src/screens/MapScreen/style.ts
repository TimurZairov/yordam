import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export default StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  myLocation: {
    width: 50,
    height: 50,
    backgroundColor: colors.whiteColor,
    position: 'absolute',
    bottom: 50,
    right: 15,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    flex: 1,
  },
  markerContainer: {
    width: 150,
    height: 150,
  },
  userImage: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    marginBottom: 8,
  },
  muLocationPoint: {
    width: 15,
    height: 15,
    backgroundColor: colors.purpleColor,
    borderRadius: 10,
  },
});
