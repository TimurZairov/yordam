import React, {useContext, useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './style';
import Header from '../../Components/Header';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {AppContext} from '../../context/Context';
import {useNavigation} from '@react-navigation/native';

const GetLocationScreen = () => {
  const {setCoordinates, coordinates} = useContext(AppContext);
  const [markerCoordinates, setMarkerCoordinates] = useState(null);
  const navigation = useNavigation();

  const getJobLocation = event => {
    setCoordinates(event.nativeEvent.coordinate);
  };

  useEffect(() => {
    if (coordinates) {
      setMarkerCoordinates(coordinates);
    }
  }, [coordinates, getJobLocation]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsMyLocationButton={true}
        initialRegion={{
          latitude: 39.652451,
          longitude: 66.970139,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={event => getJobLocation(event)}>
        {/*MARKER*/}
        {markerCoordinates ? (
          <Marker
            coordinate={{
              latitude: markerCoordinates?.latitude,
              longitude: markerCoordinates?.longitude,
            }}
            anchor={{x: 0.5, y: 0.5}}></Marker>
        ) : null}
      </MapView>
    </View>
  );
};

export default GetLocationScreen;
