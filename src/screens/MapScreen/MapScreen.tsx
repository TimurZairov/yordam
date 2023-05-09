import React, {useState} from 'react';
import {Image, PermissionsAndroid, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {MapMarker, MyLocationIcon} from '../../assets/icons';
import {colors} from '../../theme/colors';
import styles from './style';
import posts from '../../data/posts.json';
import Geolocation from 'react-native-geolocation-service';

const MapScreen = () => {
  const [myLocation, setMyLocation] = useState<{} | null>(null);

  // data = {
  //     latitude: '',
  //     longitude: '',
  //     userId: id,
  //     postId: id
  // }

  const getPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      );
      if (!granted) {
        return;
      } else {
        await Geolocation.getCurrentPosition(
          position => {
            setMyLocation(position.coords);
          },
          error => {
            console.log(error.message);
          },
          {enableHighAccuracy: true, timeout: 5000, maximumAge: 10000},
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.mapContainer}>
      <MapView
        provider={PROVIDER_GOOGLE}
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
              anchor={{x: 0.5, y: 0.5}}
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
        <Marker
          coordinate={{
            latitude: 39.668715,
            longitude: 66.86036,
          }}
          anchor={{x: 0.5, y: 0.5}}>
          <View style={[styles.markerContainer, {zIndex: 150}]}>
            <MapMarker width={50} fill={colors.blackColor} />
          </View>
        </Marker>
      </MapView>

      <View style={styles.myLocation}>
        <MyLocationIcon
          width={45}
          onPress={getPermissions}
          fill={colors.blackColor}
        />
      </View>
    </View>
  );
};

export default MapScreen;
