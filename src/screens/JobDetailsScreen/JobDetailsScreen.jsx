import React from 'react';
import styles from './style';
import {Text, View} from 'react-native';
import Header from '../../Components/Header';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const JobDetailsScreen = () => {
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
      />
      <View style={styles.jobInfoContainer}>
        <View style={styles.jobInfo}>
          <Text style={styles.jobUserName}>Матлюба Маматкулова</Text>
        </View>
      </View>
    </View>
  );
};

export default JobDetailsScreen;
