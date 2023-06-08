import React from 'react';
import styles from './style';
import {ActivityIndicator, Text, View} from 'react-native';
import Header from '../../Components/Header';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {useRoute} from '@react-navigation/native';
import {useQuery} from '@apollo/client';
import {getPost} from './queries';
import {colors, mapStyle} from '../../theme/colors';
import ErrorScreen from '../ErrorScreen';

const JobDetailsScreen = () => {
  const route = useRoute();
  const {id} = route.params;
  // Get Post details
  const {data, loading, error} = useQuery(getPost, {variables: {id}});

  const jobDetails = data?.getPost || {};
  if (loading) {
    return <ActivityIndicator color={colors.purpleColor} />;
  }

  if (error) {
    return <ErrorScreen error={error.message} />;
  }

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
        customMapStyle={mapStyle}
      />
      {id ? (
        <View style={styles.jobInfoContainer}>
          <View style={styles.jobInfo}>
            <Text style={styles.jobUserName}>{jobDetails.User.name}</Text>
            <Text style={styles.title}>{jobDetails.title}</Text>
            <Text style={styles.title}>{jobDetails.description}</Text>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default JobDetailsScreen;
