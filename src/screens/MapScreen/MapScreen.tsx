import React, {useState} from 'react';
import {Image, PermissionsAndroid, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {MapMarker, MyLocationIcon} from '../../assets/icons';
import {colors} from '../../theme/colors';
import styles from './style';
import posts from '../../data/posts.json';
import Geolocation from 'react-native-geolocation-service';

const MapScreen = () => {
  const [myLocation, setMyLocation] = useState({});
  const getPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      );
      if (!granted) {
        return;
      } else {
        Geolocation.getCurrentPosition(
          position => {
            setMyLocation(position);
          },
          error => {
            console.log(error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.mapContainer}>
      <MapView
        initialRegion={{
          latitude: 39.652451,
          longitude: 66.970139,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}>
        {/*MARKER*/}
        {posts.map((job, index) => {
          return (
            <Marker
              coordinate={{
                latitude: job.jobLocation.lat,
                longitude: job.jobLocation.loong,
              }}
              key={index}>
              <View style={styles.markerContainer}>
                <Image
                  source={{
                    uri: job.user.image,
                  }}
                  style={styles.userImage}
                />
                <MapMarker width={50} fill={colors.purpleColor} />
              </View>
            </Marker>
          );
        })}
        {/*My location*/}
      </MapView>
      <View style={styles.myLocation}>
        <MyLocationIcon width={45} onPress={getPermissions} />
      </View>
    </View>
  );
};

export default MapScreen;
