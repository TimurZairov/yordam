import React, {useEffect, useState} from 'react';
import {ActivityIndicator, PermissionsAndroid, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {MapMarker, MyLocationIcon} from '../../assets/icons';
import {mainColors, mapStyle} from '../../theme/colors';
import styles from './style';
import Geolocation from 'react-native-geolocation-service';
import {useQuery} from '@apollo/client';
import {postsByDate} from './queries';
import ErrorScreen from '../ErrorScreen';
import Card from '../../Components/Card';

const MapScreen = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [post, setPost] = useState(null);
  const [locationGRanted, setLocationGranted] = useState(false);
  const [myLocation, setMyLocation] = useState(null);
  const [region, setRegion] = useState({
    latitude: 39.652451,
    longitude: 66.970139,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  //location
  const getPermissions = async () => {
    try {
      if (!locationGRanted) {
        return;
      } else {
        await Geolocation.getCurrentPosition(
          position => {
            const {latitude, longitude} = position.coords;
            console.log(longitude);
            console.log(latitude);
            setMyLocation({latitude, longitude});
            setRegion(prevRegion => ({
              ...prevRegion,
              latitude,
              longitude,
            }));
          },
          error => {
            console.log(error.message);
          },
          {enableHighAccuracy: true, timeout: 2000, maximumAge: 1000},
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  //showJobInfo

  const showJobInfoHandler = job => {
    setShowInfo(true);
    setPost(job);
  };

  const closeJobInfoHandler = job => {
    setShowInfo(false);
    setPost(null);
  };

  useEffect(() => {
    return () => {
      setPost(null);
      setShowInfo(false);
    };
  }, []);

  useEffect(() => {
    const getAccessToLocation = async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      );
      if (granted === 'granted') {
        setLocationGranted(true);
      }
    };
    getAccessToLocation();
  }, []);

  //jobLocation
  const {data, error, loading} = useQuery(postsByDate, {
    variables: {
      type: 'POST',
      limit: 10,
    },
  });

  const location = data?.postsByDate?.items;

  if (error) {
    return <ErrorScreen error={error.message} />;
  }

  if (loading) {
    return <ActivityIndicator color={mainColors.mainColor} />;
  }

  return (
    <View style={styles.mapContainer}>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
        rotateEnabled={false}
        onPress={closeJobInfoHandler}
        customMapStyle={mapStyle}
        style={styles.map}>
        {/*MARKER*/}
        {location &&
          location?.map((job, index) => {
            return (
              <Marker
                coordinate={{
                  latitude: Number(job?.lat),
                  longitude: Number(job?.long),
                }}
                anchor={{x: 0.5, y: 0.5}}
                key={index}
                onPress={() => showJobInfoHandler(job)}>
                <View style={styles.markerContainer}>
                  <MapMarker width={50} fill={mainColors.mainColor} />
                </View>
              </Marker>
            );
          })}
        {/*My location*/}
        {myLocation !== null ? (
          <Marker coordinate={myLocation} anchor={{x: 0, y: 0}}>
            <View style={styles.markerContainer}>
              <MapMarker width={50} fill={mainColors.orangeColor} />
            </View>
          </Marker>
        ) : null}
      </MapView>
      {showInfo ? (
        <View style={styles.jobInfo}>
          <Card post={post} />
        </View>
      ) : null}
      {!showInfo ? (
        <View style={styles.myLocation}>
          <MyLocationIcon
            width={45}
            onPress={getPermissions}
            fill={mainColors.mainColor}
          />
        </View>
      ) : null}
    </View>
  );
};

export default MapScreen;
