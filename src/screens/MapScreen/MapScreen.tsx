import React from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        initialRegion={{
          latitude: 39.652451,
          longitude: 66.970139,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{flex: 1}}
      />
    </View>
  );
};

export default MapScreen;
